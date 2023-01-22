import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { auth } from "../../sheared/firebase/auth";
import AppButtan from "../App-bottan/appbottan.component";
import { Appinput } from "../App-input/appinput.component";
import { Userlogin } from "../userlogin/userlogin.component";

import '../sign-up/sign-up.styles.scss';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showchild: false,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, email, password) => {
    event.preventDefault();

    auth.signUpWithEmailAndPassword(email, password)

    createUserWithEmailAndPassword(auth, email, password)
  };
  showComponent = () => {
    this.setState({ showchild: !this.state.showchild })
  }

  render() {
    {console.log('SignUp.js')}
    return (
      <div className="signup-style">
        <h3>I don't have an account</h3>
        <span>Create a new account</span>
        <form onSubmit={this.handleSubmit}>
          <Appinput
            name='display name'
            type={'Display Name'}
            label={'display name'}
            value={this.props.text}
          />
          <Appinput
            name='email'
            type={'Email'}
            label={'email'}
            value={this.props.email}
            handleChange={this.handleChange}
            required={true}
          />
          <Appinput 
            name='password'
            type={'Password'}
            label={'password'}
            value={this.props.password}
            handleChange={this.handleChange}
            required={true}
          />
          <Appinput
            name='confirm password'
            type={'Confirm Password'}
            label={'confirm password'}
            value={this.props.confirmpassword}
            required={true}
          />
          <AppButtan type="submit"> Sign Up </AppButtan>
        </form>
        <AppButtan onClick={this.showComponent}> Show and hide </AppButtan>
        {this.state.showchild ? (<Userlogin userlogin={this.props.user} />)
          : null}
      </div>
    )
  }
}