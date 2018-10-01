import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import storeConfig from './store/storeConfig';

import { Provider } from 'react-redux';

const store = storeConfig(window.__INITIAL_DATA);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
