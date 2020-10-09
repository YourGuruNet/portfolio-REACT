import React, { Component } from "react";
import styled from "styled-components";
import { PortfolioConsumer, PortfolioContext } from "../Context";
import Title from "../components/Title";
import Loading from "../components/Loading";
import SinglePortfolio from "./PortfolioCart";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1.5,
};
//End Of page transitions

export default class FeaturedPortfolio extends Component {
  static contextType = PortfolioContext;

  render() {
    let { loading, featuredPortfolio: portfolio } = this.context;
    portfolio = portfolio.map((portfolios) => {
      return <SinglePortfolio key={portfolios.id} portfolios={portfolios} />;
    });
    return (
      <PortfolioConsumer>
        {(value) => {
          const { modalPortfolioOpen } = value;
          if (!modalPortfolioOpen) {
            return null;
          } else {
            return (
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                transition={pageTransition}
              >
                <CloseSection
                  onClick={() => {
                    value.closePortfolioModal();
                  }}
                >
                  <Section>
                    <div className="row-title">
                      <Title title="portfolio" />
                    </div>
                    <ModalContainer>
                      <div className="featured-rooms-center">
                        {loading ? <Loading /> : portfolio}
                      </div>
                    </ModalContainer>

                    <button
                      className="btn-close"
                      onClick={() => {
                        value.closePortfolioModal();
                      }}
                    >
                      <i className="fas fa-times-circle" title="Close" />
                    </button>
                    <div className="button-row">
                      <Link to="/portfolios/">
                        <button className="btn-primary">See all</button>
                      </Link>
                    </div>
                  </Section>
                </CloseSection>
              </motion.div>
            );
          }
        }}
      </PortfolioConsumer>
    );
  }
}

const CloseSection = styled.div`
  color: rgba(2, 2, 34, 0.404);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999999;
`;
const Section = styled.div`
  padding: 0 0;
  z-index: 99999;
  width: 90%;
  height: 60%;
  left: 5%;
  right: 5%;
  position: absolute;
  top: 20%;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mainDark);
  border: solid 0.01rem var(--mainText);
  .row-title {
    margin-top: 0.5rem;
    justify-content: center;
    position: absolute;
    top: 0;
  }

  .btn-close {
    color: var(--mainText);
    font-size: 2rem;
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  .btn-close:hover {
    color: var(--mainAccent);
  }
  .button-row {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 1111px) {
    height: auto;
    width: auto;
    width: 90%;
    left: 5%;
    right: 5%;
    top: 5%;
  }
  @media (max-width: 726px) {
    height: 100%;
    width: 44%;
    left: 28%;
    right: 28%;
  }
  @media (max-width: 643px) {
    width: 44%;
    left: 28%;
    right: 28%;
    height: 90%;
  }
  @media (max-width: 600px) {
    height: 80%;
  }

  @media (max-width: 476px) {
    width: 80%;
    left: 10%;
    right: 10%;
    height: 110%;
  }
  @media (max-width: 440px) {
    height: 100%;
  }
  @media (max-width: 360px) {
    width: 90%;
    left: 5%;
    right: 5%;
    height: 90%;
    .btn-close {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 330px) {
    width: 98%;
    left: 1%;
    right: 1%;
    height: 85%;
  }
  @media (max-width: 300px) {
    width: 100%;
    left: 0;
    right: 0;
    height: 80%;
  }
`;
const ModalContainer = styled.div`
  height: 80%;
  width: auto;
  padding: 0 0;
  z-index: 9999;
  width: 90%;
  left: 5%;
  right: 5%;
  position: absolute;
  top: 5%;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }

  .featured-rooms-center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
  }
  @media (max-width: 1111px) {
    .featured-rooms-center {
      margin-top: 2rem;
    }
  }
  @media (max-width: 726px) {
    .featured-rooms-center {
      margin-top: 1rem;
    }
  }
  @media (max-width: 600px) {
    .featured-rooms-center {
      margin-top: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-column-gap: 0;
    }
  }
`;
