import React, { Component } from 'react';
import styled from 'styled-components';
import about1 from '../svg/about-1.svg'
import about2 from '../svg/about-2.svg'
import Roll from 'react-reveal/Roll';
export default class About extends Component {

  render() {
 
    return (
        <Content>
            <div className='column'>
              <div className='card'>
              <Roll left>
                <h3>View from the world</h3>
                <p>
                First, of all, exploring starts with you, second, knowledge is power, but enthusiasm pulls the switch. I have experience in website development using HTML, CSS, SCSS, JavaScript, React, C#, .NET, SQL, and also mobile cross-platform development with Flutter and React Native. Mentioned tools and languages are the ones I have used in real-world projects working with clients.                </p>
                </Roll>
                <div className="space"/>
                <Roll right>
                <img src={about1} alt='Arvis Iljins' />
                </Roll>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <Roll left>
                <img src={about2} alt='Arvis Iljins' />
                </Roll>
                <div className="space"/>
                <Roll right>
                <h3>Imagine! I will create it</h3>
                <p>
                  Anyone with an organization, a small business, or just a
                  passion needs a website to share it with the world. I can help
                  you to build amazingly designed web pages for your business or
                  just fun and easy blog pages. Tested for making it easy to
                  create full-featured, mobile-compatible.
                </p>
                </Roll>
              </div>
            </div>
            <div className='row'>
            </div>
        </Content>
    );
  }
}
const Content = styled.div`
  border-bottom: 0.01rem solid var(--mainAccent);
  margin: 0 10rem;
  max-width: 180rem;
  padding: 0 10rem;

  .column {
    float: left;
    width: 50%;
    padding: 2rem 1rem;

  }

  .space {
    height: 4rem;
  }

  .row {
    margin: 2rem 2rem 0 2rem;
  }
  .card {
    text-align: left;
    margin: 4rem; 
  }
  img {
    max-width: 100%;
  }
  p {
    font-size: 2rem;
    text-align: justify;
    margin-bottom: 1.5rem;
    hyphens: auto;
  }
  h3 {
    font-size: 4rem;
    color: var(--mainAccent);
  }
  h6 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
    color: var(--light-blue);
  }



  /* Clear floats after the columns */
  .row:after {
    content: '';
    display: table;
    clear: both;
  }
  @media screen and (max-width: 1100px) {
    margin: 0;
    padding: 0;
    width: 100%;
    .column {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  }
`;
