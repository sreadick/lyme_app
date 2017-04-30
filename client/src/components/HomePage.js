import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="ui centered grid">
        <div className="row">
          <h1>LymeApp</h1>
        </div>
        <div className="row">
          <p>Track your lyme symptoms with the click of a button</p>
        </div>
        <div className="row">
          <p>Sign in below or <Link to="/register">create an account </Link>.</p>
        </div>
      </div>
    )
  }
};

export default HomePage
