import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { PortfolioConsumer } from "../Context";

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
                  <i
                    className={
                      this.state.isOpen
                        ? "fas fa-minus-circle nav-icon"
                        : "fas fa-bars nav-icon"
                    }
                  />
                </button>
              </div>
              <ul
                className={
                  this.state.isOpen
                    ? "nav-links show-nav"
                    : "nav-links nav-links-p-close"
                }
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => {
                      value.openPortfolioModal();
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-links-p">
                  <p>
                    <span className="info">
                      <i className="far fa-envelope" title="Email" />{" "}
                      info@yourgurunet.com
                    </span>
                    &nbsp;
                    <span className="info">
                      <i className="fas fa-phone-alt" title="Phone" />{" "}
                      +37127150201
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
  width: 100%;
  background-color: var(--mainDark);
  box-shadow: var(--lightShadow);
  z-index: 99999;

  .nav-center {
    padding: 0.7rem;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
  }
  .nav-btn {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    float: right;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
    color: var(--mainText);
  }
  .nav-icon:hover {
    color: var(--mainAccent);
  }
  .nav-links {
    line-height: 0;
    overflow: hidden;
    transition: var(--mainTransition);
    list-style-type: none;
  }
  .show-nav {
    height: 130px;
  }
  .nav-links a,
  .nav-links-p {
    margin-top: 0.7rem;
    display: block;
    text-decoration: none !important;
    padding: 0.5rem 0;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--mainSpacing);
  }
  .nav-links a:hover {
    color: var(--mainAccent);
  }
  .nav-links-p {
    color: #7e7e7e71;
    position: absolute;
    right: 1rem;
    bottom: 0.4rem;
    font-size: 0.6rem;
  }
  .nav-links-p-close {
    display: none;
  }
  .nav-center {
    padding: 0.7rem;
  }
  .info {
    color: var(--mainText);
    cursor: pointer;
  }
  .info:hover {
    color: var(--mainAccent);
  }

  @media screen and (min-width: 1056px) {
    .nav-links-p {
      color: #a8a5a571;
      position: absolute;
      right: 2rem;
      font-size: 0.7rem;
      bottom: 2rem;
    }
    .nav-btn {
      display: none;
    }
    .nav-center {
      max-width: 80%;
      margin: 0 auto;
      display: flex;
      padding: 0.7rem;
    }
    .nav-links {
      height: auto;
      display: flex;
      margin-left: 4rem;
    }
    .nav-links a {
      margin: 1.5rem 0 1rem 1rem;
      padding: 0.5rem 0;
    }
  }
`;
