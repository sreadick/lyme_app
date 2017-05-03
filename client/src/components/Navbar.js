import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import DashboardPage from '../containers/DashboardPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions';

// {this.props.user.currentUser && <NavLink className="item" activeClassName="active" exact to="/symptoms">My Symptoms</NavLink> }

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="ui menu">
          <NavLink className="item" activeClassName="active" exact to="/">LymeApp</NavLink>
          {this.props.user.currentUser ? (
            <div className="right menu">
              <span className="item">Signed in as {this.props.user.currentUser.email}</span>
              <NavLink className="item" activeClassName="active" exact to='#' onClick={this.props.logoutUser}>Log Out</NavLink>
            </div>
          ) : (
            <div className="right menu">
              <NavLink className="item" activeClassName="active" exact to="/login">Log In</NavLink>
              <NavLink className="item" activeClassName="active" exact to="/register">Register</NavLink>
            </div>
          )}
        </div>
      </div>
    )
  }
};

Navbar.propTypes = {
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(Navbar);
