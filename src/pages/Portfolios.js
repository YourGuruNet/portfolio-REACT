import React from "react";
import PortfolioContainer from "../components/PortfolioContainer";
import PageTransition from "../components/PageTransition";

export default function Portfolio() {
  return (
    <PageTransition>
      <PortfolioContainer />
    </PageTransition>
  );
}
