import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <section className="footer-container">
          <div className="social-media-wrap">
            <small className="website-right">
              <p>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by yourgurunet.com
              </p>
            </small>
            <div className="social-ions">
              <a
                className="social-icon-link"
                href="https://www.facebook.com/arvis.iljns"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                className="social-icon-link"
                href="https://www.instagram.com/arvis_iljins/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fab fa-instagram-square" />
              </a>
              <a
                className="social-icon-link"
                href="https://www.linkedin.com/in/arvis-iljins-0865081b3/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="social-icon-link"
                href="https://github.com/YourGuruNet"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <i className="fab fa-github-square" />
              </a>
            </div>
          </div>
        </section>
      </FooterContainer>
    );
  }
}
const FooterContainer = styled.div`
  background-color: var(--mainDark);
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: var(--lightShadowTop);

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    max-width: 1000px;
    margin: 0.5rem 0.5rem 0 0.5rem;
  }
  .social-media-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 0.5rem 0.5rem 0 0.5rem;
  }
  .website-right {
    color: var(--mainText);
    margin-bottom: 0.4rem;
    text-decoration: none;
  }
  .social-ions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
  }
  .social-icon-link {
    font-size: 24px;
    color: var(--mainText);
    transition: var(--mainTransition);
  }
  .social-icon-link:hover {
    color: var(--mainAccent);
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
