import React from 'react';
import styled from 'styled-components';

export default function Banner({ title, children, button, span }) {
  return (
    <BannerContainer>
      <h1>
        {title}
        <span style={{ color: 'red' }}>{span}</span>
      </h1>
      {children}
      {button}
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  display: inline-block;
  background: transparent;
  color: white;
  padding: 3rem 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  font-family: 'Libre Baskerville', serif;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 1rem;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    animation-name: moveInRight;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  @media screen and (min-width: 576px) {
    .banner {
      padding: 2rem 3rem;
    }
    h1 {
      font-size: 3rem;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1.8rem;
    }
    -typed {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20rem);
    }
    80% {
      opacity: 0.8;
      transform: translateX(2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(20rem);
    }
    80% {
      opacity: 0.8;
      transform: translateX(-2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @media screen and (min-width: 992px) {
    .banner {
      padding: 3rem 6rem;
    }
    h1 {
      font-size: 6rem;
      padding-bottom: 2rem;
    }
    p {
      font-size: 3rem;
    }
  }
  .arrow-button {
    font-size: 10rem;
    color: var(--mainText);
    margin: 1rem;
    animation-duration: 4s;
    background-color: transparent;
    border: none;
    color: var(--main-light);
  }
  .arrow-button:hover {
    color: var(--mainAccent);
  }
  .arrow-button:focus {
    outline: none;
  }
  @media (max-width: 726px) {
    .arrow-button {
      font-size: 6rem;
    }
  }
  .row {
    display: flex;
    align-items: center;
  }
`;
