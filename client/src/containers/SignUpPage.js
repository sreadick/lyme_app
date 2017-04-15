import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import Auth from '../modules/Auth';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loggedIn: false,
      user: {
        name: "",
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
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    // Create AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/register');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // set a success message
        localStorage.setItem('successMessage', xhr.response.message);
        // change component-conainer state
        this.setState({
          loggedIn: true,
          errors: {},
        });

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
    if (this.state.loggedIn) {
      return <Redirect to="/login" />
    } else {
      return (
        <SignUpForm
          onSubmit={this.processForm} onChange={this.changeUser}
          errors={this.state.errors} user={this.state.user}
        />
      );
    }
  }
}

export default SignUpPage
