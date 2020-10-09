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
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/portfolios/" component={Portfolios} />
          <Route path="/portfolio/:slug" component={SinglePortfolio} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </AnimatePresence>
      <FeaturedPortfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
