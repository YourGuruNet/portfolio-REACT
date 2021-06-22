import React, { Component } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import FeaturedCarousel from "./FeaturedCarousel";

export default class FeaturedPortfolio extends Component {
  render() {
    return (
      <Section>
        <Title title="Featured work" white />
        <div className="center">
          <FeaturedCarousel />
        </div>
        <div className="button-row">
          <Link to="/portfolios/" className="btn-primary white">
            See all
          </Link>
        </div>
      </Section>
    );
  }
}

const Section = styled.div`
  z-index: 999;
  margin-top: -25rem;
  padding-top: 20rem;
  height: 85rem;
  display: block;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  background: var(--darkGradient);

  .row-title {
    margin-top: 0.5rem;
    justify-content: center;
    position: absolute;
    top: 0;
  }

  .center {
    max-width: 90vw;
    margin: 3rem auto;
    display: block;
  }

  @media screen and (max-width: 500px) {
    .center {
      width: 100vw;
      margin: 0 auto;
    }
  }

  .button-row {
    width: 100%;
    display: flex;
    padding-top: 2rem;
    justify-content: center;
  }
`;
