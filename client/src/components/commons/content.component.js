import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";	
import StoreInLine from "../store/store-in-line.component";
import ProductsList from "../admin/products/products-list.component";
import CreateProduct from "../admin/products/create-product.component";
import UpdateProduct from "../admin/products/edit-product.component";
import ContactUS from "./contact.component";
import About from "./about.component";
import Register from "../users/register.component";
import Dashboard from "../users/dashboard.component";
import Login from "../users/login.component";



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
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
        </div>
    )}}