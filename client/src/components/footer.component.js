import React, { Component } from 'react';
import { Link } from 'react-router-dom';  	

export default class Navbar extends Component {

  render() {
    return (
        <footer className="page-footer font-small light pt-4" id="bg">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3"> 
                        <h5 className="text-uppercase">Icare</h5>
                        <p>Est laboris in dolore ipsum. Dolor veniam excepteur tempor in Lorem ea mollit proident.Est laboris in dolore ipsum. Dolor veniam excepteur tempor in Lorem ea mollit proident.</p> 
                    </div>     
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">GO TO</h5>
                        <ul className="list-unstyled">
                            <li> <a href="./">Store</a> </li>
                            <li> <a href="./">About</a> </li>
                            <li> <a href="./products">Products</a> </li>
                            <li> <a href="./contact">Contact us</a> </li>
                        </ul>    
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">JOIN IN</h5>
                        <ul className="list-unstyled">
                            <li>  <a href="#!">facebook</a> </li>
                            <li> <a href="#!">Instagram</a> </li>
                            <li><a href="#!">Twitter</a>  </li>
                            <li><a href="#!">Snapshat</a> </li>
                        </ul>        
                    </div>
                </div>
            </div>
                <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                    <a href="./"> icarewebsite.fr</a>
                </div>
        </footer>
        
    );      
  }
}