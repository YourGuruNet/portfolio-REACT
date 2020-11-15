import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { PortfolioConsumer } from "../Context";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  mobileNavOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <PortfolioConsumer>
        {(value) => (
          <NavbarComponent>
            <div className="nav-center">
              <div className="nav-header">
                <Link to="/">
                  <img src={logo} alt="your-guru-net" />
                </Link>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.mobileNavOpen}
                >
                  <span
                    className={
                      this.state.isOpen
                        ? "navigation__icon--close"
                        : "navigation__icon"
                    }
                  >
                    &nbsp;
                  </span>
                </button>
              </div>
              <ul
                className={
                  this.state.isOpen
                    ? "nav-links show-nav"
                    : "nav-links nav-links-p-close"
                }
              >
                <li onClick={this.mobileNavOpen}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={this.mobileNavOpen}>
                  <Link to="/portfolios/">Portfolio</Link>
                </li>
                <li onClick={this.mobileNavOpen}>
                  <Link
                    to="#"
                    onClick={() => {
                      value.openContactModal();
                    }}
                  >
                    Contacts
                  </Link>
                </li>
                <li onClick={this.mobileNavOpen}>
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-links-p">
                  <p style={{ textTransform: "none" }}>
                    <span className="info info-hide">
                      <FiMail /> info@yourgurunet.com
                    </span>
                    &nbsp; &nbsp;
                    <span className="info info-hide">
                      <BiPhone /> +37127150201
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </NavbarComponent>
        )}
      </PortfolioConsumer>
    );
  }
}

const NavbarComponent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: var(--mainDark);
  box-shadow: var(--lightShadow);
  z-index: 2;

  .nav-header {
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
  }
  .nav-btn {
    margin-top: 1rem;
    margin-right: 2rem;
    float: right;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 2.5rem;
    color: var(--mainText);
  }

  .nav-icon:hover {
    color: var(--mainAccent);
  }

  /////////////////
  .navigation__icon {
    position: relative;
    margin-top: 2rem;
    width: 3rem;
    height: 0.2rem;
    background-color: var(--mainText);
    display: inline-block;

    ::before,
    ::after {
      width: 3rem;
      height: 0.2rem;
      background-color: var(--mainText);
      display: inline-block;
    }
    ::before,
    ::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    ::before {
      top: -1rem;
    }
    ::after {
      top: 1rem;
    }
  }

  .navigation__icon:hover {
    background-color: var(--mainAccent);
  }
  .navigation__icon:hover::before {
    top: -1.2rem;
    background-color: var(--mainAccent);
  }

  .navigation__icon:hover::after {
    top: 1.2rem;
    background-color: var(--mainAccent);
  }
  //Close
  .navigation__icon--close {
    position: relative;
    margin-top: 2rem;
    width: 3rem;
    height: 0.2rem;
    background-color: transparent;
    display: inline-block;

    ::before,
    ::after {
      width: 3rem;
      height: 0.2rem;
      background-color: var(--mainText);
      display: inline-block;
    }
    ::before,
    ::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    ::before {
      transform: rotate(135deg);
      top: 0rem;
    }
    ::after {
      transform: rotate(-135deg);
      top: 0rem;
    }
  }
  .navigation__icon--close:hover::before {
    background-color: var(--mainAccent);
  }

  .navigation__icon--close:hover::after {
    background-color: var(--mainAccent);
  }
  /////////////////
  .nav-links {
    line-height: 0;
    overflow: hidden;
    transition: var(--mainTransition);
    list-style-type: none;
    text-transform: uppercase;
  }
  .show-nav {
    height: 20rem;
    animation-name: showNavigation;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
  }

  @keyframes showNavigation {
    0% {
      opacity: 0;
      height: 0rem;
    }
    100% {
      opacity: 1;
      height: 20rem;
    }
  }
  .nav-links a,
  .nav-links-p {
    margin-top: 3rem;
    display: block;
    text-decoration: none !important;
    padding: 0.5rem 0;
    color: var(--mainText);
    transition: var(--mainTransition);
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }
  .nav-links a:hover {
    transform: translateY(-0.3rem) scale(1.1);
    color: var(--mainAccent);
  }
  .nav-links a:active {
    transform: translateY(0.3rem);
  }
  .nav-links-p {
    color: #7e7e7e71;
    position: absolute;
    right: 1rem;
    bottom: 0.4rem;
    font-size: 1rem;
  }
  .nav-links-p-close {
    width: 0;
    opacity: 0;
    height: 0rem;
  }
  .nav-center {
    padding: 0.8rem;
  }
  .info {
    transition: all 0.2s;
    color: var(--mainText);
    cursor: pointer;
  }
  .info:hover {
    color: var(--mainAccent);
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1056px) {
    .show-nav {
      animation-name: none;
    }
    .nav-links-p {
      color: #a8a5a571;
      position: absolute;
      right: 4rem;
      font-size: 1rem;
      bottom: 3rem;
      opacity: 1;
    }
    .nav-btn {
      display: none;
    }
    .nav-center {
      max-width: 80%;
      margin: 0 auto;
      display: flex;
      padding: 0.7rem;
      padding-left: 0rem;
    }
    .nav-links {
      height: auto;
      display: flex;
      margin-left: 2rem;
      width: 100%;
      opacity: 1;
    }
    .nav-links a {
      margin: 2.5rem 0 1rem 1rem;
      padding: 0.5rem 0;
    }
  }
  @media screen and (max-width: 339px) {
    .info-hide {
      display: none;
    }
  }
`;
