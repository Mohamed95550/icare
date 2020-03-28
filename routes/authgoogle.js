const router = require('express').Router();
module.exports = (passport)=>{
    
    router.get('/auth/google',passport.authenticate("google",{scope:['profile','email']}));

    router.get('/auth/google/callback',passport.authenticate('google'),(req, res) => {
        res.redirect('/products');}
    );

    
}