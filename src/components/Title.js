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
    font-size: 3rem !important;
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: var(--mainText);
    text-transform: uppercase;
  }
  div {
    width: 7rem;
    height: 0.5rem;
    margin: 0 auto;
    background: var(--mainText);
  }
  @media (max-width: 726px) {
    h4 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 643px) {
    h4 {
      font-size: 1.2rem;
    }
  }
`;
