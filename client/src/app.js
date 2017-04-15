import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Auth from './modules/Auth';
import Base from './components/Base';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Base} />
      </Router>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

// constructor(){
//   super();
//   this.handleGetComponent = this.handleGetComponent.bind(this);
//   this.handleOnEnter = this.handleOnEnter.bind(this);
// }

// handleGetComponent(location, callback) {
//   if (Auth.isUserAuthenticated()) {
//     callback(null, DashboardPage);
//   } else {
//     callback(null, HomePage);
//   }
// }
//
// handleOnEnter(nextState, replace) {
//   Auth.deauthenticateUser();
//   replace('/');
// }

// <div>
//   <Base />
//   <Route path="/" getComponent={this.handleGetComponent}/>
//   <Route path="/login" component={LoginPage}/>
//   <Route path="/register" component={SignUpPage}/>
//   <Route path="/logout" onEnter={this.handleOnEnter} />
// </div>
