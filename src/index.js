import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './store';
import { Provider } from 'react-redux';
import Router from './components/Router'

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
