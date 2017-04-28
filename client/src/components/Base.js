import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Auth from '../modules/Auth';
import HomePage from './HomePage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import DashboardPage from '../containers/DashboardPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions';
class Base extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
          <Link to="/">Home</Link>
          {this.props.auth.isAuthenticated && !this.props.auth.isFetching ? (
            <Link to='#' onClick={this.props.logoutUser}>Log Out</Link>
          ) : (
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </div>
          )}

          {this.props.auth.isAuthenticated && !this.props.auth.isFetching ? (
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

Base.propTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(Base);

// Base.propTypes = {
//   childView: React.PropTypes.array.isRequired
// };
//
// { /* child component will be rendered here */ }
// { this.props.childView }
