import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Product = props => (
    <div className="card col-md-3" id="card" >
     <div className="row">
       <div className="col-md-2">
       {(Number(props.product.solde) > 0) ? <h6><a href="#" className="badge badge-warning">-{props.product.solde} %</a></h6>:""}
       </div>
       <div className="col-md-8"></div>
       <div className="col-md-2">
          {(Number(props.product.stock) <6 ) ? <h6><a href="#" className="badge badge-danger" id="floatR">{props.product.stock} stock</a></h6>: <h6><a href="#" className="badge badge-success" id="txtPrice">In stock</a></h6>}   
       </div>
       </div>
      <img src={props.product.images} className="card-img-top" id="imgProduct" onClick={() =>{
      window.location = './edit/'+props.product._id}}/> 
      <div className="card-body">
          <h5 className="card-title" >{props.product.title}</h5>       
          <p className="card-text" id="txtDecription">{props.product.description}.</p>
          <h5><a href="#" className="badge badge-success" id="txtPrice">{props.product.price} &#8364;</a></h5>
          {Number(props.product.stock) === 0 ? <span className="btn btn-outline-danger  btn-block">Coming soon</span>:<Link to={"/edit/"+props.product._id}> <span className="btn btn-outline-success  btn-block" id="btn" >Checkout</span></Link>}
      
      </div>
  </div>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div id="marginNav">
      <h5><a href="#" className="badge badge-success" id="badge">Store</a></h5>
  
          <div className="row">
             { this.productList() }
             <div className="col-md-1"></div>
          </div>           
      </div>
    )
  }
}