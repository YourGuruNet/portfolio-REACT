import React, { Component } from 'react';
import { PortfolioContext } from '../Context';
import { Link } from 'react-router-dom';
import Error from './Error';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import defaultBcg from '../images/picture-1.JPG';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import PageTransition from '../components/PageTransition';
import { FaCodeBranch } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { TiArrowBackOutline } from 'react-icons/ti';
import { FaAngleDoubleDown } from 'react-icons/fa';

export default class SinglePortfolio extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  static contextType = PortfolioContext;
  scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  render() {
    const { getPortfolio } = this.context;
    const portfolio = getPortfolio(this.state.slug);
    if (!portfolio) {
      return <Error />;
    }
    const { name, description, github, online, methods, images } = portfolio;
    const [mainImg, ...defaultImg] = images;

    return (
      <PageTransition>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={name}>
            <div className='order'>
              <button onClick={this.scrollToRef} className='arrow-button'>
                <FaAngleDoubleDown />
              </button>
            </div>
          </Banner>
        </StyledHero>
        <Section>
          <div className='portfolio-images' ref={this.myRef}>
            <Zoom>
              <img src={defaultImg[0]} alt={name} width='100%' />
            </Zoom>
            <Zoom>
              <img src={defaultImg[1]} alt={name} width='100%' />
            </Zoom>
            <Zoom>
              <img src={defaultImg[2]} alt={name} width='100%' />
            </Zoom>
          </div>

          <div className='portfolio-info'>
            <article>
              <h3>Project description:</h3>
              <p>{description}</p>
            </article>
            <section className='methods-used'>
              <h6>used methods:</h6>
              <ul className='methods'>
                {methods.map((item, index) => {
                  return (
                    <span key={index} className='methods-list'>
                      <li key={index}>
                        <FaCodeBranch /> {item}
                      </li>
                    </span>
                  );
                })}
              </ul>
            </section>
            <section className='links'>
              <a
                href={github}
                className='btn-primary'
                target='_blank'
                rel='noopener noreferrer'>
                <FaGithub />
                &nbsp;Github
              </a>
              <a
                href={online}
                className='btn-primary'
                target='_blank'
                rel='noopener noreferrer'>
                <FaGlobe />
                &nbsp;Online
              </a>
              <Link to='/portfolios/' className='btn-primary'>
                <TiArrowBackOutline />
                &nbsp;Back
              </Link>
            </section>
          </div>
        </Section>
      </PageTransition>
    );
  }
}

const Section = styled.section`
  padding: 2rem 0 0 0;
  padding-bottom: 15rem;
  p {
    font-size: 1.6rem;
    text-align: justify;
    margin-bottom: 1.5rem;
    hyphens: auto;
  }
  h3 {
    font-size: 2rem;
    margin: 0.5rem 0 0.5rem 0;
    color: var(--medium-blue);
  }
  h6 {
    color: var(--medium-blue);
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }
  .portfolio-images {
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 5rem;
  }
  .portfolio-images img {
    width: 100%;
    max-height: 20rem;
    display: block;
    object-fit: cover;
  }
  .portfolio-info {
    max-width: 80vw;
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
    grid-template-columns: repeat(auto-fit, minmax(10rem, 0.5fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 836px) {
    .links a {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 514px) {
    .portfolio-images {
      width: 90vw;
      grid-row-gap: 1rem;
      grid-column-gap: 3rem;
      grid-template-columns: 90%;
      position: relative;
      left: 5%;
      right: 5%;
    }
    .portfolio-info {
      width: 90vw;
    }
  }
  @media (max-width: 400px) {
    .portfolio-info {
      width: 95vw;
    }
    .portfolio-images {
      width: 90vw;
      grid-template-columns: 90%;
      position: relative;
      left: 5%;
      right: 5%;
    }
    p {
      font-size: 1.2rem;
      text-align: justify;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h6 {
      font-size: 1.1rem;
    }
    .methods {
      font-size: 1.2rem;
    }
  }
`;
