//const googleStrategy = require ('passport-google-oauth20').Strategy;
//const keys = require('../config/keys');
const localStrategy = require ('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');



module.exports = (passport) =>{
    
    /********** Google strategy ***********************/
      /*  passport.use(new googleStrategy({

            clientID : keys.googleClientID,
            clientSecret : keys.googleClientSecret,
            callbackURL:'/auth/google/callback'
        },(accessToken,profile,refreshToken,done)=>{
        
        console.log("accessToken :"+accessToken);
        console.log("RefreshToken :"+refreshToken);
        console.log("Profile :"+profile);
        }))
    */
 /********** Local strategy ***********************/

    passport.use(new localStrategy({ usernameField : 'email'},
                (email,password,done )=>{
        User.findOne({email:email})
                    .then(user => {
                        if(!user){return done(null,false,{message:'not found!'})}
                       bcrypt.compare(password,user.password,(err, ismatch)=>{
                            if(err){throw err}
                            if(ismatch){return done(null,user)}
                            else{return done(null,false,{message:'email not registred!'})}
                       })
                    })
                    .catch(err=>console.log(err))
      }))

/******************* serialize deserialize ************************/
// used to serialize the user for the session
passport.serializeUser((user, done) => {
    done(null, user.id); 
   // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

}//export