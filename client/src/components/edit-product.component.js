import React, { Component } from 'react';
import axios from 'axios';

export default class EditProduct extends Component {
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
        slode:'',
        images: ''
    }
  }
  
  componentDidMount(id){
    axios.get('http://localhost:5000/products/'+this.props.match.params.id)
    .then(response => {
      this.setState({ 
          title : response.data.title,
          marque : response.data.marque,
          description : response.data.description,
          price : response.data.price,
          stock : response.data.stock,
          solde : response.data.solde,
          images : response.data.images
        })
    })
    .catch((error) => {
      console.log(error);
    })
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
goToHome(e){
    window.location('/');
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
      images: this.state.images
    }

    console.log(product);

    axios.post('http://localhost:5000/products/update/'+this.props.match.params.id, product)
    .then(res => console.log(res.data));
   window.location = '/products';
}

  render() {
    return (
      <div id="marginNav">
     <h5><a href="#" className="badge badge-success" id="badge">Products</a> <a href="#" className="badge badge-success" id="badge">Edit product</a></h5>
      <form onSubmit={this.onSubmit}>
        <div className="row">
                <div className="form-group col-6"> 
                <label>Title :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
                </div>
                <div className="form-group col-6">
                <label>Marque :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.marque}
                    onChange={this.onChangeMarque}
                    />
                </div>
        </div>
        <div className="row">
                <div className="form-group col-12"> 
                <label>Description :</label>
                    <textarea 
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        rows="8"
                        />
                </div>
        </div>              
        
        <div className="row">
                <div className="form-group col-4"> 
                <label>Price :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    />
                </div>
                <div className="form-group col-4"> 
                <label>Stock :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                
                    />
                </div>
                <div className="form-group col-4"> 
                <label>Solde :</label>
                <input  type="text"
                    className="form-control"
                    value={this.state.solde}
                    onChange={this.onChangeSolde}
                  maxLength="2"
                    />
                </div>
        </div>
        <div className="row">
                <div className="form-group col-12"> 
                <label>Images :</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.images}
                        onChange={this.onChangeImages}
                        />
                  </div>
        </div>    
        <div className="row"> 
                <div className="form-group col-8" >  
                </div>
                <div className="form-group col-2" >
                    <input type="submit" value="Update this Product" className="btn btn-outline-warning btn-block" />
                </div>
                <div className="form-group col-2" >
                    <input type="submit" value="to Home" className="btn btn-outline-primary btn-block" onClick={this.goToHome} />
                </div>
               
        </div>              
      </form>
    </div>
    )
  }
  
}