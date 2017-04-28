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
