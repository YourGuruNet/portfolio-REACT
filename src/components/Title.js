import React from 'react';
import styled from 'styled-components';

export default function Title({ title }) {
  return (
    <TitleSection>
      <h4 className='title'>{title}</h4>
    </TitleSection>
  );
}

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  z-index: 999999;

  .title {
    font-size: 3.5rem;
    text-transform: uppercase;
    transition: all 0.2s;
    /* This lines alow to change text color to linear-gradient*/
    display: inline-block;

    background: var(--lightGradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    :hover {
      transform: skewX(10deg) scale(1.1);
      text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.4);
    }
  }
  @media (max-width: 726px) {
    .title {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 643px) {
    .title {
      font-size: 1.2rem;
    }
  }
`;
