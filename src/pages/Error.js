import React, { Component } from "react";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";
import err from "../images/error.jpg";
import Typical from "react-typical";

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <StyledHero img={err}>
        <Banner title="www.yourgurunet.com" span={this.props.location.pathname}>
          <Typical
            className="text-typed"
            steps={[
              "Sorry...",
              2000,
              "Page your searching doesn't exist...",
              2000,
            ]}
            loop={1}
            wrapper="p"
          />
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default Default;
