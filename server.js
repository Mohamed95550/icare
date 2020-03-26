const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const productsController = require('./routes/product.controller');
const passport = require ('passport');
const keys = require('./config/keys');
const googleStrategy = require ('passport-google-oauth20').Strategy;

app.use(cors());

passport.use(new googleStrategy({

  clientID : keys.googleClientID,
  clientSecret : keys.googleClientSecret,
  callbackURL:'/auth/google/callback'
},(accessToken,profile,refreshToken,done)=>{

console.log("accessToken :"+accessToken);
console.log("RefreshToken :"+refreshToken);
console.log("Profile :"+profile);
}))

app.get('/auth/google',passport.authenticate("google",
{
    scope:['profile','email']
}
));

app.get(
'/auth/google/callback',
passport.authenticate('google'),
(req, res) => {
res.redirect('/products');
}
);


app.use(express.json());
app.use(express.urlencoded({extended:false}));
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}
if(process.env.NODE_ENV === 'production'){
    mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology:true });
}
else{
    mongoose.connect('mongodb+srv://dbMern:yaeb1ZRoBGEAol6V@cluster0-5x2ny.mongodb.net/dbIcare?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true });
}

//process.env.MONGODB_URI
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/products', productsController);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
