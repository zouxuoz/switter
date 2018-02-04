import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from './store/createStore';
import setupSocket from './sockets/setupSocket';

import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

setupSocket(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
