import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";	
import StoreInLine from "./store-in-line.component";
import ProductsList from "./products-list.component";
import CreateProduct from "./create-product.component";
import UpdateProduct from "./edit-product.component";
import ContactUS from "./contact.component";
import About from "./about.component";



export default class content extends Component {

  render() {
    return (
        <div>
            <Route path="/" exact component={StoreInLine} />
            <Route path="/products" exact component={ProductsList} />
            <Route path="/create" exact component={CreateProduct} />
            <Route path="/edit/:id" exact component={UpdateProduct} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={ContactUS} />
        </div>
    )}}