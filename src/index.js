import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Car from './components/car';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/car/:id" component={Car}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
