import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeMarque = this.onChangeMarque.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeSolde = this.onChangeSolde.bind(this);
    this.onChangeImages = this.onChangeImages.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      marque:'',
      description: '',
      price: '',
      stock: '',
      images: ''
    }
  }
  
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeMarque(e) {
    this.setState({
      marque: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }
  
  onChangeStock(e) {
    this.setState({
      stock: e.target.value
    })
  }

  onChangeSolde(e) {
    this.setState({
      solde: e.target.value
    })
  }
  
  onChangeImages(e) {
    this.setState({
      images: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const product = {
      title: this.state.title,
      marque :this.state.marque,
      description: this.state.description,
      price: this.state.price,
      stock: this.state.stock,
      solde: this.state.solde,
      images: [this.state.images]
    }

    console.log(product);

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data))
      console.log(product);
    window.location = '/';
  }
  render() {
    return (
      <div id="marginNav">
      <h5><a href="#" className="badge badge-success" id="badge">Products</a> <a href="#" className="badge badge-success" id="badge">Create product</a></h5><br></br>
      <form onSubmit={this.onSubmit}>
        <div className="row">
                <div className="form-group col-6"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    placeholder="Enter a title"
                    />
                </div>
                <div className="form-group col-6">
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.marque}
                    onChange={this.onChangeMarque}
                    placeholder="Enter the marque"
                    />
                </div>
        </div>
        <div className="row">
                <div className="form-group col-4"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    placeholder="Enter the price (euro)"
                    />
                </div>
                <div className="form-group col-4"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    placeholder="Enter quatity in stock"
                    />
                </div>
                <div className="form-group col-4"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.solde}
                    onChange={this.onChangeSolde}
                    placeholder="Solde %"
                    maxLength="2"
                    />
                </div>
        </div>
        <div className="row">
                <div className="form-group col-12"> 
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.images}
                        onChange={this.onChangeImages}
                        placeholder="Add Uri of image"
                        />
                  </div>
        </div>    
        <div className="row">
                <div className="form-group col-12"> 
                  <textarea 
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        placeholder="Enter the description"
                        rows="8"
                    />
                </div>
        </div>             
        <div className="row"> 
                <div className="form-group col-8"></div>
                <div className="form-group col-2" >
                    <input type="submit" value="Create new Product" className="btn btn-outline-success btn-block" />
                </div>
                <div className="form-group col-2" >
                    <input type="reset" value="Reset" className="btn btn-outline-warning btn-block" />
                </div>
        </div>              
      </form>
    </div>
    )
  }
  
}