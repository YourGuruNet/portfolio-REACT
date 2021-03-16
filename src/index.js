import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PortfolioProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Added history function so we can use all over the page
export const history = createBrowserHistory();
ReactDOM.render(
  <PortfolioProvider>
    <Router history={history}>
      <App />
    </Router>
  </PortfolioProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
