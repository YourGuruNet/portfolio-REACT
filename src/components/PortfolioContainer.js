import React from "react";
import { PortfolioConsumer } from "../Context";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioList from "./PortfolioList";
import Loading from "./Loading";

export default function PortfolioContainer() {
  return (
    <PortfolioConsumer>
      {(value) => {
        const { loading, sortedPortfolio, portfolios } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <React.Fragment>
            <PortfolioFilter portfolio={portfolios} />
            <PortfolioList portfolio={sortedPortfolio} />
          </React.Fragment>
        );
      }}
    </PortfolioConsumer>
  );
}
