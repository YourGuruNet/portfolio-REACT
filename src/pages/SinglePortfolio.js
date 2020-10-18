import React, { Component } from "react";
import { motion } from "framer-motion";
import { PortfolioContext } from "../Context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import defaultBcg from "../images/picture-1.JPG";
import styled from "styled-components";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
};
//End Of page transitions

export default class SinglePortfolio extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props); //using to see what props we can get
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = PortfolioContext;
  render() {
    const { getPortfolio } = this.context;
    const portfolio = getPortfolio(this.state.slug);
    if (!portfolio) {
      return <Error />;
    }
    const { name, description, github, online, methods, images } = portfolio;
    const [mainImg, ...defaultImg] = images;
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariant}
        transition={pageTransition}
      >
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={name}>
            <div className="order">
              <a href="#down" className="arrow-button">
                <i className="fas fa-angle-double-down" />
              </a>
            </div>
          </Banner>
        </StyledHero>
        <Section>
          <div className="portfolio-images" id="down">
            <Zoom>
              <img src={defaultImg[0]} alt={name} width="100%" />
            </Zoom>
            <Zoom>
              <img src={defaultImg[1]} alt={name} width="100%" />
            </Zoom>
            <Zoom>
              <img src={defaultImg[2]} alt={name} width="100%" />
            </Zoom>
          </div>

          <div className="portfolio-info">
            <article>
              <h3>Project description:</h3>
              <p>{description}</p>
            </article>
            <section className="methods-used">
              <h6>used methods:</h6>
              <ul className="methods">
                {methods.map((item, index) => {
                  return (
                    <span key={index} className="methods-list">
                      <li key={index}>
                        <i className="fas fa-code-branch" /> {item}
                      </li>
                    </span>
                  );
                })}
              </ul>
            </section>
            <section className="links">
              <a
                href={github}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
                &nbsp;Github
              </a>
              <a
                href={online}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe" />
                &nbsp;Online
              </a>
              <Link to="/portfolios/" className="btn-primary">
                <i className="fas fa-arrow-alt-circle-left" />
                &nbsp;Back
              </Link>
            </section>
          </div>
        </Section>
      </motion.div>
    );
  }
}

const Section = styled.section`
  padding: 2rem 0 0 0;

  .portfolio-images {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
  }
  .portfolio-images img {
    width: 100%;
    max-height: 200px;
    display: block;
  }
  .portfolio-info {
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 2rem auto;
  }
  .desc,
  .info {
    margin: 1rem 0;
  }
  .desc h3 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  .desc p {
    line-height: 1.5;
  }
  .info h3,
  .info h6 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  .info h6 {
    font-weight: 300;
  }
  .methods-used {
    padding-top: 0.5rem;
    width: 80vw;
    margin: 0 auto 3rem auto;
  }
  .methods-used h6 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  .links {
    text-align: center;
  }
  .links a {
    margin: 0 1rem;
  }
  .methods {
    text-align: center;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0.5fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
  }
  .methods-list:hover {
    background: var(--mainText);
    color: var(--mainAccent);
    box-shadow: 0 0 10px var(--mainAccent), 0 0 40px var(--mainAccent),
      0 0 80px var(--mainAccent);
  }

  @media (max-width: 836px) {
    .links a {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 514px) {
    .portfolio-images {
      width: 60vw;
      grid-row-gap: 1rem;
      grid-column-gap: 30px;
      grid-template-columns: 90%;
      position: relative;
      left: 5%;
      right: 5%;
    }
  }
  @media (max-width: 400px) {
    .portfolio-images {
      width: 90vw;
      grid-template-columns: 90%;
      position: relative;
      left: 5%;
      right: 5%;
    }
  }
`;
