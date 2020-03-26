const router = require('express').Router();
let Product = require('../models/product');

router.route('/').get((req, res) => {
   Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Adding one product
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const marque = req.body.marque;
    const description = req.body.description;
    const price= Number(req.body.price);
    const stock = Number(req.body.stock);
    const solde = Number(req.body.solde);
    const images = Number(req.body.images);
  
    const newProduct = new Product({
     title,
     marque,
      description,
      price,
      stock,
      solde,
      images
    });
  
    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

//get product by vallue
router.route('/:id').get((req, res) => {
    //Product.findOne(title = req.body.title)   
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delete one product by id
router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update one product by id
router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
        product.title = req.body.title;
        product.marque = req.body.marque;
        product.description = req.body.description;
        product.price = req.body.price;
        product.stock = req.body.stock;
        product.solde = req.body.solde;
        product.images = req.body.images;

      product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//search function
router.route('/searching/:value').get((req, res) => {
    Product.find({"title": { "$regex": req.params.value, "$options": "i" } } )
 // Product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;