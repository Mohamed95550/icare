import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeAvatar = this.onChangeAvatar.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname:'',
      email: '',
      password: '',
      confirm: '',
        avatar: ''
    }
  }
  
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
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
  
  onChangeConfirmPassword(e) {
    this.setState({
      confirm: e.target.value
    })
  }


  onChangeAvatar(e) {
    this.setState({
      avatar: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname :this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      //confirm: this.state.confirm,
      avatar: this.state.avatar   
    }

    console.log(user);

    axios.post('http://localhost:5000/users/register', user)
      .then(res => console.log(res.data))
      console.log(user);
    window.location = './login';
  }
  render() {
    return (
      <div id="marginNav">
     <h1>REGISTER</h1>
      <form onSubmit={this.onSubmit}>
        <div className="row">
                <div className="form-group col-6"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname}
                    placeholder="Enter firstname"
                    minLength="2"
                    />
                </div>
                <div className="form-group col-6">
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                    placeholder="Enter lastname"
                    minLength="2"
                    />
                </div>
        </div>
       
        <div className="row">
            <div className="form-group col-12">
                <input    type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    placeholder="Enter your email"
                    />  
            </div>           
         </div>

         <div className="row">
            <div className="form-group col-6">
                <input  type="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    placeholder="Enter your password"
                    /> 
            </div>  
            <div className="form-group col-6">
                    <input  type="password"
                    required
                    className="form-control"
                    value={this.state.confirm}
                    onChange={this.onChangeConfirmPassword}
                    placeholder="Confirm your password"
                    /> 
            </div>              
         </div>
         <div className="row">
            <div className="form-group col-12">
                <input  type="text"
                    className="form-control"
                    value={this.state.avatar}
                    onChange={this.onChangeAvatar}
                    placeholder="avatar URI "
                    />   
                </div>          
         </div>
           
        <div className="row"> 
                <div className="form-group col-8"></div>
                <div className="form-group col-2" >
                    <input type="submit" value="Register" className="btn btn-outline-success btn-block" />
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