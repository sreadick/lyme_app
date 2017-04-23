import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import Auth from './modules/Auth';
import Base from './components/Base';
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
  // applyMiddleware(thunkMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route component={Base} />
        </Provider>
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
