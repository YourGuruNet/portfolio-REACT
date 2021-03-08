import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { FaCheck } from 'react-icons/fa';

const offers = [
  {
    title: 'Mobile applications',
  },
  {
    title: 'Web application',
  },
  {
    title: 'Web Hosting',
  },
];

const Features = () => {
  return (
    <Section>
      <Title title='We can help you if you search for' />
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
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        CHekmark
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`card__side card__side--back card__side--back--${index}`}>
                  <div className='card__cta'>
                    <div className='card__price--box'>
                      <p className='card__price--only'>Today Only</p>
                      <p className='card__price--value'> $ 259.49</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
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
  .col-1-of-3 {
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
    background-image: linear-gradient(to right bottom, #fcb92a, #ff8901);
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
    background-image: linear-gradient(to right bottom, #fcb92a, #ff8901),
      url(../img/tour-1.jpg);
  }
  .card__picture--1 {
    background-image: linear-gradient(to right bottom, #a2ddf6, #16aae9),
      url(../img/tour-2.jpg);
  }
  .card__picture--2 {
    background-image: linear-gradient(to right bottom, #75fd53, #1e8b03),
      url(../img/tour-3.jpg);
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
    color: #fff;
  }
  .card__price--only {
    text-transform: uppercase;
    font-size: 2.8rem;
    font-weight: 300;
  }
  .card__price--value {
    font-size: 5rem;
    font-weight: 100;
    margin-bottom: 5rem;
  }
`;
