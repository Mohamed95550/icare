import React, { Component } from 'react';
import axios from 'axios';
var FontAwesome = require('react-fontawesome');

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeObject = this.onChangeObject.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

   

    this.state = {
      email: '',
      object:'',
      body: '',
      time:''
    }
  }
  
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeObject(e) {
    this.setState({
      object: e.target.value
    })
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value
    })
  }



  onSubmit(e) {
    e.preventDefault();
    var today = new Date();
    const contact = {
      email: this.state.email,
      object :this.state.object,
      body: this.state.body,
      time:today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    }

    /*console.log(product);

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data))
      console.log(product);
    window.location = '/';
    */
   console.log(contact);
  }

  render() {
    return (
      <div id="marginNav" className="container">
       <h5><a href="#" className="badge badge-success" id="badge">Contact us</a></h5> 
      <p> <FontAwesome name='calendar' />{this.state.time} </p>
      <form onSubmit={this.onSubmit}>

       
                <div className="form-group"> 
                    <input  type="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            placeholder="Enter your email adresse"
                    />
                </div>
                <div className="form-group" >
                    <input  type="text"
                            required
                            className="form-control"
                            value={this.state.object}
                            onChange={this.onChangeObject}
                            placeholder="enter your subject"
                            rows="10"
                    />
                </div>

                <div className="form-group"> 
                    <textarea 
                        required
                        className="form-control"
                        value={this.state.body}
                        onChange={this.onChangeBody}
                        placeholder="Enter the body"
                        rows="5"
                        />
                </div>
                      <div className="form-group " >
                    <input type="submit" value="Submit message" className="btn btn-outline-success btn-block" />
                    </div>
                <div className="form-group " >
                    <input type="reset" value="Reset" className="btn btn-outline-warning btn-block" />
                </div>
              
        </form>
    </div>

    )
  }
  
}