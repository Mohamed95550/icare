import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

const Product = props => (
  <ul>
    <li><a href={"/edit/"+props.product._id}><img alt="" className="smallImage" src={props.product.images} /></a> <a href="#" className="badge badge-warning">{props.product.price} &#8364;</a><a href={"/edit/"+props.product._id}> {props.product.title}</a></li>
  </ul>
)

class Navbar extends Component {
  constructor(props){
    super(props)
      this.state={
        products:[] ,
        show:false 
      }
  }
  onSearching = (e) =>
  { 
    this.setState({
      show:true
    })
    let value = e.target.value;

      axios.get('http://localhost:5000/products/searching/'+value)
      .then(response => {
        if(!response.data){
          return this.setState({ products:'',show:false })
        }
        else
       return this.setState({ products: response.data,show:false })
       
     })
     .catch((error) => {
       console.log(error);
     })
  }

  autocompleteList() {
    return this.state.products.map(product => {
      return <Product product={product} key={product._id}/>
    })
  }

  render() {
    const{show}=this.state;
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg" id="navbar">
       
        <Link to="/" className="navbar-brand" id="logo">Icare</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
            <Link to="/" className="nav-link">Store</Link>
          </li>
          <li className="navbar-item">
           <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
           <Link to="/contact" className="nav-link">Contact us</Link>
          </li>
        </ul>  
       <div className="dropdown-search">
    <button className="dropbtn">D
    </button>
    <div className="dropdown-content-search">     
   { show  || this.autocompleteList()}
    </div>
  </div> 
        <input   type="text" id="searching"
                            placeholder="Searching.."
                            autoComplete="false"
                            onChange={this.onSearching}
                     
                    />
         <div className="dropdown-caddie">   
          <span className="badge badge-pill badge-info" id="notif" onClick={
            ()=>{console.log("pas de notifications")}
          }>Caddie {}</span>
              <div className="dropdown-content-caddie">
              <a href="#">Empty</a>
              </div>
          </div>
         
          <div className="dropdown">
          <button type="button" className="btn btn-outline-info dropdown-toggle" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
            </button>
              <div className="dropdown-content">
                  <a href="./register">Register</a>
                  <a href="./login">Login</a>
                  <a href="http://localhost:5000/auth/google">Google</a>
              </div>
          </div>
        </div>
      </nav>
      
        
    );
  }
}

export default Navbar;