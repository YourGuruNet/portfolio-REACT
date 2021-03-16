import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { FaCheck } from 'react-icons/fa';
import image1 from '../images/app.jpg';
import image2 from '../images/app2.jpg';
import image3 from '../images/app3.jpg';
import { PortfolioConsumer } from '../Context';
const offers = [
  {
    title: 'Mobile applications',
    about: [
      "Latest technology's",
      'Flutter and React Native',
      'Android and iOS',
      'Technological consulting',
      'Development strategy',
    ],
    price: '30 euros/h',
    message: 'Starting from',
  },
  {
    title: 'Web application',
    about: [
      "Latest technology's",
      'React, JavaScript, SASS, CSS',
      'Mobile responsive',
      'Launch control',
      'Quality assurance',
    ],
    price: '25 euros/h',
    message: 'Starting from',
  },
  {
    title: 'Back-End Development',
    about: [
      "Best solution's",
      'C#, .NET, Firebase',
      'Server setups',
      'API, other back end processes',
      'Core application logic',
    ],
    price: '35 euros/h',
    message: 'Starting from',
  },
];

const Features = () => {
  return (
    <PortfolioConsumer>
      {(value) => (
        <Section>
          <Title title='I can help you if you search for' />
          <div className='row'>
            {offers.map((item, index) => {
              return (
                <div className='col-1-of-3' key={index}>
                  <div className='card'>
                    <div className='card__side card__side--front'>
                      <div
                        className={`card__picture card__picture--${index}`}></div>
                      <h4 className='card__heading'>
                        <span
                          className={`card__heading--span card__heading--span--${index}`}>
                          {item.title}
                        </span>
                      </h4>
                      <div className='card__details'>
                        <ul>
                          {item.about.map((item, id) => (
                            <li>
                              <span style={{ paddingRight: '1rem' }}>
                                <FaCheck />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      className={`card__side card__side--back card__side--back--${index}`}>
                      <div className='card__cta'>
                        <div className='card__price--box'>
                          <p className='card__price--only'>{item.message}</p>
                          <p className='card__price--value'> {item.price}</p>
                        </div>
                        <button
                          className='feature_button'
                          onClick={() => {
                            value.openContactModal();
                          }}>
                          Contact me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}
    </PortfolioConsumer>
  );
};

export default Features;

const Section = styled.div`
  background-color: var(--color-grey-light-1);
  padding: 25rem 0;
  margin-top: -28rem;
  font-weight: 700;
  .row {
    max-width: 114rem;
    margin: 0 auto;
    padding: 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    grid-gap: 5rem;
  }
  @media screen and (max-width: 450px) {
    padding-top: 30rem;
    .row {
      grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    }
  }
  @media screen and (max-width: 320px) {
    .row {
      grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    }
  }
  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 50rem;
  }
  .card__side {
    height: 50rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    backface-visibility: hidden;
  }
  .card__side--front {
    background-image: linear-gradient(
      to right bottom,
      rgba(162, 221, 246),
      rgba(22, 170, 233)
    );
  }
  .card__side--back {
    transform: rotateY(180deg);
  }
  .card__side--back--0 {
    background: linear-gradient(to right bottom, #fcb92a, #ff8901);
  }
  .card__side--back--1 {
    background-image: linear-gradient(to right bottom, #a2ddf6, #16aae9);
  }
  .card__side--back--2 {
    background-image: linear-gradient(to right bottom, #75fd53, #1e8b03);
  }
  .card:hover .card__side--front {
    transform: rotateY(-180deg);
  }
  .card:hover .card__side--back {
    transform: rotateY(0);
  }
  .card__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: color;
    -webkit-clip-path: polygon(
      100% 0,
      100% 77%,
      75% 100%,
      40% 88%,
      0 100%,
      0 0
    );
    clip-path: polygon(100% 0, 100% 77%, 75% 100%, 40% 88%, 0 100%, 0 0);
  }
  .card__picture--0 {
    background: linear-gradient(to right bottom, #fcb92a, #ff8901),
      url(${image1}) center/cover no-repeat;
  }
  .card__picture--1 {
    background: linear-gradient(to right bottom, #a2ddf6, #16aae9),
      url(${image2}) center/cover no-repeat;
  }
  .card__picture--2 {
    background: linear-gradient(to right bottom, #75fd53, #1e8b03),
      url(${image3}) center/cover no-repeat;
  }
  .card__heading {
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 400;
    text-align: right;
    position: absolute;
    top: 15rem;
    right: 2rem;
    width: 50%;
    color: #fff;
  }
  .card__heading--span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .card__heading--span--0 {
    background: linear-gradient(
      to right bottom,
      rgba(252, 185, 42, 0.9),
      rgba(255, 137, 1, 0.9)
    );
  }
  .card__heading--span--1 {
    background: linear-gradient(
      to right bottom,
      rgba(162, 221, 246, 0.9),
      rgba(22, 170, 233, 0.9)
    );
  }
  .card__heading--span--2 {
    background: linear-gradient(
      to right bottom,
      rgba(117, 253, 83, 0.9),
      rgba(30, 139, 3, 0.9)
    );
  }
  .card__details {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 3rem;
  }
  .card__details ul {
    list-style: none;
    margin: 0 auto;
    text-align: left;
    width: 70%;
  }
  .card__details ul li {
    padding-bottom: 0.8rem;
  }
  .card__details ul li:not(:last-child) {
    border-bottom: 0.01rem solid #f0ecec;
  }
  .card__details ul li span {
    color: rgba(22, 170, 233, 0.7);
  }
  .card__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.1);
    clip-path: polygon(
      50% 0%,
      100% 11%,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 10%
    );
  }
  .card__price--box {
    margin-top: 2rem;
    text-align: center;
    color: var(--main-light);
  }
  .card__price--only {
    padding-top: 2rem;
    text-transform: uppercase;
    font-size: 2.8rem;
    font-weight: 300;
  }
  .card__price--value {
    font-size: 5rem;
    font-weight: 100;
    margin-bottom: 3rem;
  }

  .feature_button {
    color: var(--main-light);
    transition: var(--mainTransition);
    background-color: transparent;
    display: inline-block;
    text-decoration: none;
    letter-spacing: var(--mainSpacing);
    padding: 1rem 2rem;
    border: 0.3rem solid var(--main-light);
    transition: 0.2s;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    outline: none;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 2rem;
  }
  .feature_button:hover {
    background: var(--main-light);
    color: var(--light-blue);
    border-color: var(--light-blue);
    box-shadow: 0 0 1rem var(--light-blue), 0 0 4rem var(--light-blue),
      0 0 8rem var(--light-blue);
  }
  .feature_button:active {
    box-shadow: 0 0 0.5rem var(--light-blue), 0 0 3rem var(--light-blue),
      0 0 5rem var(--light-blue);
  }
`;
