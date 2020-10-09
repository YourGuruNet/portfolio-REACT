import React, { Component } from "react";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";
import err from "../images/error.jpg";
import { motion } from "framer-motion";
import Typical from "react-typical";
//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
};
//End Of page transitions

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariant}
        transition={pageTransition}
      >
        <StyledHero img={err}>
          <Banner
            title="www.yourgurunet.com"
            span={this.props.location.pathname}
          >
            <Typical
              className="text-typed"
              steps={[
                "Sorry...",
                2000,
                "Page your searching doesn't exist...",
                2000,
              ]}
              loop={1}
              wrapper="h1"
            />
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
          </Banner>
        </StyledHero>
      </motion.div>
    );
  }
}

export default Default;
