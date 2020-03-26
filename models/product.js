const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  marque: { type: String, required: true} ,
  description : { type: String, required: true} ,
  price : { type: Number, required: true} ,
  stock : { type: Number, required: true} ,
  solde : { type: Number, required: false,maxlength:2} ,
  images: [{
    type: String,
    default: ["../assets/images/annonce.jpg"]
}]

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;