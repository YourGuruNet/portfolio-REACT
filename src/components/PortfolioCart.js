import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PortfolioConsumer } from "../Context";

export default function SinglePortfolio({ portfolios }) {
  //console.log(room) use to see what props we can get!
  const { type, images, logo, slug } = portfolios;

  return (
    <PortfolioConsumer>
      {(value) => {
        return (
          <Cart>
            <CartContainer>
              <img className="img" src={images[0]} alt="portfolio" />
              {/*Us || to set default img */}
              <div className="logo-top">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <Link
                to={`/portfolio/${slug}`}
                className="btn-cart portfolio-link"
                onClick={() => {
                  value.closePortfolioModal();
                }}
              >
                {/* root is our path to exact portfolio wee click */}
                {type}
              </Link>
            </CartContainer>
          </Cart>
        );
      }}
    </PortfolioConsumer>
  );
}

const Cart = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  margin: 1rem;
  :hover {
    box-shadow: var(--darkShadow);
  }
`;

const CartContainer = styled.article`
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    display: block;
    transition: var(--mainTransition);
  }
  .logo {
    max-width: 5rem;
  }
  .logo-top {
    position: absolute;
    min-width: 6rem;
    min-height: 6rem;
    top: 0;
    right: 0;
    background: black;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-left-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: var(--mainTransition);
  }

  .portfolio-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
  }
  :hover {
    background: rgba(0, 0, 0, 0.8);
  }
  :hover img {
    opacity: 0.3;
  }
  :hover .logo-top {
    opacity: 0;
  }
  :hover .portfolio-link {
    transform: translate(-50%, -50%) scale(1);
  }
`;
