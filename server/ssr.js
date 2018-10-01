import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from '../src/components/App';
import storeConfig from '../src/store/storeConfig';

module.exports = async () => {
  const resp = await axios.get('https://bakesaleforgood.com/api/deals');

  const initialData = {
    deals: resp.data.slice(0, 4),
  };

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
