const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const productController = require('./routes/product.controller');
const userController = require('./routes/user.controller');
const passport = require ('passport');
const  session  = require ('express-session') ;

app.use(cors());

//passport config
//require('./config/passport')(passport);

//Parse content
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Switch to environements(prod or dev)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

//Config connection in dev or production
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

//use session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))

//use middlewares
app.use(passport.initialize());
app.use(passport.session());

//Routes
//require('./routes/authgoogle')(passport);
app.use('/products', productController);
app.use('/users', userController);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
