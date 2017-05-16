import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Home from 'site/Home'

import { applyMiddleware, createStore, compose } from 'redux';
import thunk  from 'redux-thunk'
import reducer from 'reducers'

import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware';

const io = require('socket.io-client') 
const socket = io();

const mountApp = document.getElementById('root')
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: true,
    }) : compose;

const middleware = [thunk,promiseMiddleware()]
const enhancer  = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducer,enhancer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store = {store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>, mountApp

  );
};

render(Home);

if (module.hot) {
  module.hot.accept('site/Home', () => {
    render(Home)
  });
  module.hot.accept('reducers/index', ()=>{
    const nextRootReducer = require('reducers').default;
    store.replaceReducer(nextRootReducer);
  })
}

const logger = (store)=>(next)=>(action)=>{
  console.log("actions firfded", action)
  next(action);
}



store.subscribe(()=> {
  //console.log("store changed", store.getState());
})



