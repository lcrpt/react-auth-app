import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';
import { setAuthentification } from './actions';

const invariant = require('redux-immutable-state-invariant').default();

const middleware = process.env.NODE_ENV !== 'production' ?
  [invariant, thunk] :
  [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (localStorage.getItem('token')) store.dispatch(setAuthentification(true));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);


registerServiceWorker();
