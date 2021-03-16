import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import img1 from '../images/background-home.jpg';
import ReactTypingEffect from 'react-typing-effect';
import { PortfolioConsumer } from '../Context';
import PageTransition from '../components/PageTransition';
import Features from '../components/Features';
import FeaturedPortfolio from '../components/FeaturedPortfolio';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageTransition>
      <PortfolioConsumer>
        {(value) => (
          <StyledHero img={img1}>
            <Banner title='My name is Arvis iljins'>
              <div style={{ minHeight: '5rem' }}>
                <ReactTypingEffect
                  text={[
                    "I'm Latvian Web Developer",
                    'Working as a Freelancer',
                    "I'm here to create your web world",
                  ]}
                  cursorRenderer={(cursor) => <p>{cursor}</p>}
                  displayTextRenderer={(text) => <p>{text}</p>}
                  speed={100}
                  eraseSpeed={40}
                  eraseDelay={1000}
                  typingDelay={0}
                />
              </div>
              <Link to='/portfolios/'>
                <button className='btn-primary animated-button white'>
                  Portfolio
                </button>
              </Link>
            </Banner>
          </StyledHero>
        )}
      </PortfolioConsumer>
      <Features />
      {/* <FeaturedPortfolio /> */}
    </PageTransition>
  );
}
