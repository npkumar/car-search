import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import reducers from './reducers';

import App from './components/App';
import Car from './components/car';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/car/:id" component={Car}></Route>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
