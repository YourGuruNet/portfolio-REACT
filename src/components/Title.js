import React from "react";
import styled from "styled-components";

export default function Title({ title }) {
  return (
    <TitleSection>
      <h4>{title}</h4>
      <div />
    </TitleSection>
  );
}

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  z-index: 999999;
  h4 {
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: var(--mainText);
    text-transform: uppercase;
  }
  div {
    width: 5rem;
    height: 5px;
    margin: 0 auto;
    background: var(--mainText);
  }
  @media (max-width: 726px) {
    h4 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 643px) {
    h4 {
      font-size: 1rem;
    }
  }
  @media (max-width: 476px) {
    h4 {
    }
  }
  @media (max-width: 360px) {
    h4 {
    }
  }
  @media (max-width: 330px) {
    h4 {
    }
  }
  @media (max-width: 300px) {
    h4 {
    }
  }
`;
