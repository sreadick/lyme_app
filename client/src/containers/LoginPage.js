import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Auth from '../modules/Auth.js';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';
    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    this.state = {
      errors: {},
      successMessage,
      user: {
        email: "",
        password: ""
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user});
  }

  processForm(event) {
    event.preventDefault();
    // Create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // Create AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // Save the token
        Auth.authenticateUser(xhr.response.token);

        // change component-conainer state
        this.setState({errors: {}});
      } else {
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({errors});
      }
    });
    xhr.send(formData);
  }

  render() {
    // If a user regesters redirect to LoginPage
    if (Auth.isUserAuthenticated()) {
      return <Redirect to="/" />
    } else {
      return (
        <LoginForm
          onSubmit={this.processForm} onChange={this.changeUser}
          errors={this.state.errors} successMessage={this.state.successMessage} user={this.state.user}
        />
      );
    }
  }
}

export default LoginPage
