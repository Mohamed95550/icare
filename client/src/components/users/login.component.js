import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
  
    axios.post('http://localhost:5000/users/login',user)
      .then(
        (res=> res.data > 0) ? res => console.log(res.data) : null
      )
      this.setState({
        email:'',
        password:''
      })
     
    //window.location = './dashboard';
  }
  render() {
    return (
    <div id="marginNav">
     <h1>LOGIN</h1>
      <form onSubmit={this.onSubmit}>  
      <div className="row"> 
            <div className="form-group col-12">
                <input    type="email"
                    name="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    placeholder="Enter your email"
                    />  
          </div>
        </div>
        <div className="row"> 
            <div className="form-group col-12">
                <input    type="password"
                   name="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    placeholder="Enter your password"
                    />  
                    </div>
   
        </div>

        <div className="row"> 
                <div className="form-group col-8"></div>
                <div className="form-group col-2" >
                    <input type="submit" value="Submit" className="btn btn-outline-success btn-block" />
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