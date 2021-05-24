import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
import { Navigator } from './navigation'
import reducer from './reducer';
import { ToastContainer } from 'react-toast';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk))
  )


ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Navigator />
      <ToastContainer 
      delay={2500}
      position='bottom-right'
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


