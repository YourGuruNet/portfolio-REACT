import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PortfolioConsumer } from '../Context';

import React, { useState } from 'react';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const mobileNavOpen = () => setOpenNav((openNav) => !openNav);
  return (
    <PortfolioConsumer>
      {(value) => (
        <NavbarComponent>
          <button
            onClick={() => mobileNavOpen()}
            className={openNav ? 'navigation__button ' : 'navigation__button'}>
            <span
              className={
                openNav ? 'navigation__icon--close' : 'navigation__icon'
              }>
              &nbsp;
            </span>
          </button>
          <div
            className={
              openNav
                ? 'navigation__background background_opens'
                : 'navigation__background '
            }>
            &nbsp;
          </div>
          <nav
            className={
              openNav
                ? 'navigation__nav navigation_clicked'
                : 'navigation__nav hide'
            }>
            <ul className='navigation__list'>
              <li onClick={() => mobileNavOpen()} className='navigation__item'>
                <Link className='navigation__link' to='/'>
                  Home
                </Link>
              </li>
              <li onClick={() => mobileNavOpen()} className='navigation__item'>
                <Link className='navigation__link' to='/portfolios/'>
                  Portfolio
                </Link>
              </li>
              <li onClick={() => mobileNavOpen()} className='navigation__item'>
                <Link
                  className='navigation__link'
                  to='#'
                  onClick={() => {
                    value.openContactModal();
                  }}>
                  Contacts
                </Link>
              </li>
              <li onClick={() => mobileNavOpen()} className='navigation__item'>
                <Link className='navigation__link' to='/about'>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </NavbarComponent>
      )}
    </PortfolioConsumer>
  );
};

export default Navbar;

const NavbarComponent = styled.nav`
  .navigation__button {
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    top: 6rem;
    right: 6rem;
    position: fixed;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
    text-align: center;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background: var(--darkGradient);
    z-index: 1000;
    transition: transform 0.8s;
  }

  .navigation__nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1500;
    width: 0;
    opacity: 0;
    transition: all 0.8s;
  }

  .hide {
    pointer-events: none; /* Disable button click*/
  }

  .navigation__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  .navigation__item {
    margin: 1rem;
  }

  .navigation__link:link,
  .navigation__link:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 230%;
    transition: all 0.4s;
  }

  .navigation__link:hover,
  .navigation__link:active {
    color: black;
    background-position: 100%;
    transform: translateX(1rem);
  }
  .background_opens {
    transform: scale(80);
  }
  .navigation_clicked {
    opacity: 1;
    width: 100%;
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
      content: '';
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
    background-color: var(--medium-blue);
  }
  .navigation__icon:hover::before {
    background-color: var(--medium-blue);
    top: -1.2rem;
  }
  .navigation__icon:hover::after {
    background-color: var(--medium-blue);
    top: 1.2rem;
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
      content: '';
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
    background-color: var(--medium-blue);
  }
  .navigation__icon--close:hover::after {
    background-color: var(--medium-blue);
  }
  /////////////////

  .navigation__button:hover .navigation__icon::before {
    top: -1rem;
  }

  .navigation__button:hover .navigation__icon::after {
    top: 1rem;
  }

  /* .navigation__checkbox:checked + .navigation__button .navigation__icon { */
  .transparent {
    background-color: transparent;
  }

  @media (max-width: 643px) {
    .navigation__background {
      position: fixed;
      top: 2.5rem;
      right: 2.5rem;
    }
    .navigation__button {
      top: 2.2rem;
      right: 2.2rem;
    }
  }
`;
