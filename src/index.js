import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './includes/bootstrap';
import {BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
