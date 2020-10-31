import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Portfolios from "./pages/Portfolios";
import SinglePortfolio from "./pages/SinglePortfolio";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeaturedPortfolio from "./components/FeaturedPortfolio";
import About from "./pages/About";

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <FeaturedPortfolio />
      <Contacts />
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/portfolios/" component={Portfolios} />
        <Route path="/portfolio/:slug" component={SinglePortfolio} />
        <Route path="/about" component={About} />
        <Route path="/" component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
