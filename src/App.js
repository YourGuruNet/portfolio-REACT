import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Portfolios from './pages/Portfolios';
import SinglePortfolio from './pages/SinglePortfolio';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <React.Fragment>
      <HashRouter exact>
        <Contacts />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolios/'>
            <Portfolios />
          </Route>
          <Route path='/portfolio/:slug' component={SinglePortfolio} />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
