import React, { Component } from 'react';
import styled from 'styled-components';
import { PortfolioContext } from '../Context';
import Title from '../components/Title';
import Loading from '../components/Loading';

import { Link } from 'react-router-dom';
import FeaturedCard from './FeaturedCard';

export default class FeaturedPortfolio extends Component {
  static contextType = PortfolioContext;

  render() {
    let { loading, featuredPortfolio: portfolio } = this.context;
    portfolio = portfolio.map((portfolios) => {
      return <FeaturedCard key={portfolios.id} portfolios={portfolios} />;
    });
    return (
      <Section>
        <Title title='Featured work' white />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : portfolio}
        </div>
        <div className='button-row'>
          <Link to='/portfolios/' className='btn-primary white'>
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
  @media screen and (max-width: 950px) {
    padding-top: 15rem;
    height: 95rem;
  }
  @media screen and (max-width: 500px) {
    height: 100rem;
  }
  @media screen and (max-width: 350px) {
    height: 105rem;
  }
  .row-title {
    margin-top: 0.5rem;
    justify-content: center;
    position: absolute;
    top: 0;
  }

  .featured-rooms-center {
    max-width: 140rem;
    margin: 3rem auto;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-column-gap: 2rem;
  }
  @media screen and (max-width: 120rem) {
    .featured-rooms-center {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }
  }
  .button-row {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
