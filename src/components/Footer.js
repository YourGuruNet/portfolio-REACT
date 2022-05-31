import React, { Component } from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <section className='footer-container'>
          <div className='social-media-wrap'>
            <small className='website-right'>
              <p>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                By arvis-iljins.com
              </p>
            </small>
            <div className='social-ions'>
              <a
                className='social-icon-link'
                href='https://www.facebook.com/arvis.iljns'
                target='_blank'
                rel='noopener noreferrer'
                title='Facebook'>
                <FaFacebookSquare />
              </a>
              <a
                className='social-icon-link'
                href='https://www.instagram.com/arvis_iljins/'
                target='_blank'
                rel='noopener noreferrer'
                title='Instagram'>
                <FaInstagramSquare />
              </a>
              <a
                className='social-icon-link'
                href='https://www.linkedin.com/in/arvis-iljins-0865081b3/'
                target='_blank'
                rel='noopener noreferrer'
                title='LinkedIn'>
                <FaLinkedin />
              </a>
              <a
                className='social-icon-link'
                href='https://github.com/YourGuruNet'
                target='_blank'
                rel='noopener noreferrer'
                title='Github'>
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </section>
      </FooterContainer>
    );
  }
}
const FooterContainer = styled.div`
  padding: 14rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 35%, 100% 0, 100% 100%, 0% 100%);

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    max-width: 140rem;
    margin: 0.5rem 0.5rem 0 0.5rem;
  }
  .social-media-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 0.5rem 0.5rem 0 0.5rem;
  }
  .website-right {
    margin-bottom: 0.4rem;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1.5rem;
  }
  .social-ions {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22rem;
  }

  .social-icon-link {
    font-size: 3rem;
    transition: var(--mainTransition);
  }
  .social-icon-link:hover {
    transform: translateY(-0.3rem) scale(1.1);
  }
  .social-icon-link:active {
    transform: translateY(0.3rem);
  }

  @media screen and (max-width: 820px) {
    .footer-link-wrapper {
      flex-direction: column;
    }

    .social-media-wrap {
      flex-direction: column;
    }
    .footer-container {
      padding: 1.5rem;
    }
    .website-right {
      text-align: center;
    }
    .footer-container {
      margin: 0;
    }
  }
`;
