import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar';;
import HomePage from './HomePage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import DashboardPage from '../containers/DashboardPage';
import UserSymptomsPage from '../containers/UserSymptomsPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions';

// <div className="ui menu">
//   <NavLink className="item" activeClassName="active" exact to="/">LymeApp</NavLink>
//     {this.props.auth.isAuthenticated && !this.props.auth.isFetching ? (
//       <div className="right menu">
//         <NavLink className="item" activeClassName="active" exact to='#' onClick={this.props.logoutUser}>Log Out</NavLink>
//       </div>
//     ) : (
//       <div className="right menu">
//         <NavLink className="item" activeClassName="active" exact to="/login">Log In</NavLink>
//         <NavLink className="item" activeClassName="active" exact to="/register">Register</NavLink>
//       </div>
//     )}
//   </div>

class Base extends Component {

  render() {
    return (
      <div>
        <Navbar />
        {this.props.auth.isAuthenticated && !this.props.auth.isFetching ? (
          <Route exact path="/" component={DashboardPage} />
        ) : (
          <Route exact path="/" component={HomePage} />
        )}
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={SignUpPage} />
        <Route exact path="/symptoms" component={UserSymptomsPage} />
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
