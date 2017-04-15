import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Auth from '../modules/Auth';
import HomePage from './HomePage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import DashboardPage from '../containers/DashboardPage';

class Base extends Component {
  constructor(props) {
    super(props);
    this.a = this.a.bind(this);
  }

  a() {
    Auth.deauthenticateUser();
  }

  render() {
    return (
      <div>
          <Link to="/">Home</Link>
          {Auth.isUserAuthenticated() ? (
            <Link to='#' onClick={this.a}>Log Out</Link>
          ) : (
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </div>
          )}

          {Auth.isUserAuthenticated() ? (
            <Route exact path="/" component={DashboardPage} />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={SignUpPage} />
      </div>
    )
  }
};

export default Base

// Base.propTypes = {
//   childView: React.PropTypes.array.isRequired
// };
//
// { /* child component will be rendered here */ }
// { this.props.childView }
