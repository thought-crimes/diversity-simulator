import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import App from '../src/components/App';
import storeConfig from '../src/store/storeConfig';

module.exports = async () => {

  const initialData = {};

  const store = storeConfig(initialData);

  const initialMarkup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {
    initialData,
    initialMarkup,
  };
};
