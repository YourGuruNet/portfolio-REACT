import React from "react";
import styled from "styled-components";

export default function Banner({ title, children, button, span }) {
  return (
    <BannerContainer>
      <h1>
        {title}
        <span style={{ color: "red" }}>{span}</span>
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
  padding: 2rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  font-family: "Libre Baskerville", serif;
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 576px) {
    .banner {
      padding: 2rem 3rem;
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
    }
    -typed {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .banner {
      padding: 2rem 6rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
    }
  }
  .arrow-button {
    font-size: 10rem;
    color: var(--mainText);
    margin: 1rem;
    animation-duration: 4s;
  }
  .arrow-button:hover {
    color: var(--mainAccent);
    text-shadow: 0 0 15px var(--mainAccent), 0 0 40px var(--mainAccent),
      0 0 80px var(--mainAccent);
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
