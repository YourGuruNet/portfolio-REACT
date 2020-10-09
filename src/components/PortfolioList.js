import React from "react";
import styled from "styled-components";
import PortfolioCart from "./PortfolioCart";

const PortfolioList = ({ portfolio }) => {
  return (
    <ListSection>
      <div className="portfolio-list">
        {portfolio.map((portfolios) => {
          return <PortfolioCart key={portfolios.id} portfolios={portfolios} />;
        })}
      </div>
    </ListSection>
  );
};

export default PortfolioList;

const ListSection = styled.div`
  padding: 2rem 0;
  .portfolio-list {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
  @media screen and (min-width: 776px) {
    .portfolio-list {
      width: 90vw;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }
  }
  @media screen and (min-width: 992px) {
    .portfolio-list {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;
