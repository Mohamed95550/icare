import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
const Product = props => (
  <tr>
    <td><b>{props.product.title}</b></td>
    <td> <span className="badge badge-warning">{props.product.marque}</span></td>
    <td>{props.product.description}</td>
    <td><span className="badge badge-danger" id="stockStyle">{props.product.solde}</span></td>
    <td>{props.product.price}</td>
    <td>{props.product.stock}</td>
    <td>
      <Link to={"/edit/"+props.product._id}> <span className="btn btn-outline-warning" >Edit</span></Link>  <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}><span className="btn btn-outline-danger">Delete</span></a>
    </td>
  </tr>
)

export default class ProductList extends Component {
  constructor(props) {
      super(props);
      this.deleteProduct = this.deleteProduct.bind(this)
      this.state = {
          products: []
      };
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
          <h5><a href="#" className="badge badge-success" id="badge">List products</a></h5>
          <Link to={"/create"}> <span className="btn btn-outline-success" ><b id="b">+</b> New product</span></Link> 
        
        <table className="table">
          <thead>
            <tr>
              <th className="bigTd">Title</th>
              <th className="smallTd">Marque</th>
              <th className="bigTd">Description</th>
              <th className="smallTd">Solde %</th>
              <th className="smallTd">Price</th>
              <th className="smallTd">Stock</th>
              <th >Options</th>
            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>
      </div>
    )
  }
}

function setStock (props){
  if(Number(this.product.stock)>50){
     return (
      <span className="badge badge-info" id="stockStyle">{props.product.stock}</span>
    );
  }
  if((Number(props.product.stock) < 49) && (Number(props.product.stock) > 10)){
    return (
      <span className="badge badge-warning" id="stockStyle">{props.product.stock}</span>
      );
  }
  else
  return (
    <span className="badge badge-danger" id="stockStyle">{props.product.stock}</span>
    );
}
