import React, { useEffect } from 'react';
import PortfolioContainer from '../components/PortfolioContainer';
import PageTransition from '../components/PageTransition';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageTransition>
      <PortfolioContainer />
    </PageTransition>
  );
}
