import React from 'react';
import styled from 'styled-components';
import { MdCloudDone } from 'react-icons/md';
const Solutions = () => {
  return (
    <Section>
      <div className='wrapper'>
        <div class='feature'>
          <MdCloudDone />
          <h4 class='heading-4'>Latest car models</h4>
          <p class='feature__text'>
            Pretty much every company is offering either a brand new or
            moderately refreshed vehicle for 2020. That means modern car buyers
            have no shortage of options to choose from when looking for their
            next car.
          </p>
        </div>
        <div class='feature'>
          <MdCloudDone />
          <h4 class='heading-4'>Best price guaranteed</h4>
          <p class='feature__text'>
            Our Best Price Guarantee means that you can be sure of booking at
            the best rate. If you find a lower price elsewhere within 24 hours
            of booking, we will match the lower rate.
          </p>
        </div>
        <div class='feature'>
          <MdCloudDone />
          <h4 class='heading-4'>GPS included</h4>
          <p class='feature__text'>
            Car Hire with GPS included in numerous destinations. Driving through
            a new town can be challenging if you don't have the right help.
          </p>
        </div>
        <div class='feature'>
          <MdCloudDone />
          <h4 class='heading-4'>Airport pickup</h4>
          <p class='feature__text'>
            Worldwide airport transfer from the airport to your hotel. Book your
            airport transportation with the professional.
          </p>
        </div>
        <div class='feature'>
          <MdCloudDone />
          <h4 class='heading-4'>Full gas tank included</h4>
          <p class='feature__text'>
            Offers drivers the choice of three gas tank sizes so they can choose
            the one that works best for their lifestyle. .
          </p>
        </div>
        <div class='feature'>
          <MdCloudDone />
          <h4 class='heading-4'>Day 7 for free</h4>
          <p class='feature__text'>
            Every seventh day is free so you can fully enjoy your adventure.
            Don't worry about extra charges or other hidden hooks.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Solutions;

const Section = styled.section`
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  background-color: var(--color-grey-light-1);
  padding-top: 20rem;
  margin-top: -14rem;
  height: 70rem;

  .wrapper {
    max-width: 140rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-gap: 2rem;
    align-items: start;
  }
  .heading-4 {
    font-size: 2rem;
    font-family: 'Teko', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #4f628e;
  }
  .feature {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-gap: 1.5rem;
  }
  .feature__icon {
    font-size: 3rem;
    color: #4f628e;
  }
  .feature__text {
    font-size: 1.8rem;
    text-align: center;
    grid-column: 1 /-1;
  }
`;
