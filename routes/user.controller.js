const router = require('express').Router();
const User = require('../models/user');


router.route('/').get((req, res) => {
   User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Adding one user
router.route('/register').post((req, res) => {
    let data = new Date();
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;
    const email = req.body.firstname;
    const password = req.body.password;
    const date = data.now;
    const role = req.body.role;
    const avatar = req.body.avatar;
  
    const newUser = new User({
     firstname,
     lastname,
      email,
      password,
      date,
      role,
      avatar
    });
  
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  

//get user by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delete one product by id
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update one user by id
router.route('/update/:id').put((req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.firstname= req.body.firstname;
        user.lastname= req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.date = data.now;
        user.role = req.body.role;
        user.avatar = req.body.avatar;
  
        user.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


//search function
router.route('/searching/:value').get((req, res) => {
    User.find({"email": { "$regex": req.params.value, "$options": "i" } } )
 // Product.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;