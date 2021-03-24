import React from 'react';
import styled from 'styled-components';
import { MdHearing } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import { BsQuestionDiamond } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';
import { CgNotes } from 'react-icons/cg';
import { GiSunglasses } from 'react-icons/gi';

const features = [
  {
    title: 'Why us?',
    description:
      'An individual approach is chosen for each client and project, consultations and close communication are provided during the implementation of his project',
    icon: <BsQuestionDiamond />,
  },
  {
    title: 'Compatibility',
    description:
      'Our works are compatible and dynamic and can be connected to other systems',
    icon: <BiCodeBlock />,
  },
  {
    title: 'Guaranteed quality',
    description:
      'We provide a guarantee for the developed code, as well as for the entire period of customer service and cooperation',
    icon: <MdHighQuality />,
  },
  {
    title: 'Work planning',
    description:
      'Our work processes are flexible and adaptive. We adapt, evolve and respond to the needs of our customers',
    icon: <CgNotes />,
  },
  {
    title: 'We can adapt',
    description:
      'We are able to adapt to different situations that are faced during the project development process',
    icon: <MdHearing />,
  },
  {
    title: 'Openness and transparency',
    description:
      'During development, the client has the opportunity to view the progress of the work and the developed code',
    icon: <GiSunglasses />,
  },
];

const Solutions = () => {
  return (
    <Section>
      <div className='wrapper'>
        {features.map((item, id) => {
          return (
            <div class='feature' key={id}>
              <span className='ikon'>{item.icon}</span>
              <h4 class='heading-4'>{item.title}</h4>
              <p class='feature__text'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Solutions;

const Section = styled.section`
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  background-color: var(--color-grey-light-1);
  padding: 20rem 0;
  margin-top: -14rem;

  .wrapper {
    padding: 1.5rem;
    max-width: 140rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-gap: 2rem;
  }
  .heading-4 {
    font-size: 2rem;
    font-family: 'Teko', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #4f628e;
    align-self: center;
  }
  .ikon {
    font-size: 5rem;
    font-weight: 600;
    color: #4f628e;
    align-self: center;
    padding-right: 1rem;
  }
  .feature {
    display: grid;
    grid-template-columns: min-content 1fr;
  }

  .feature__text {
    font-size: 1.8rem;
    text-align: center;
    grid-column: 1 /-1;
  }
  @media screen and (max-width: 950px) {
    margin-top: -20rem;
  }
  @media screen and (max-width: 500px) {
    margin-top: -22rem;
  }
  @media screen and (max-width: 350px) {
    margin-top: -24rem;
  }
  @media screen and (max-width: 400px) {
    .wrapper {
      padding: 1.5rem;
      max-width: 140rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      grid-gap: 2rem;
    }
  }
`;
