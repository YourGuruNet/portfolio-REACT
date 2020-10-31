import React, { Component } from "react";
import { PortfolioConsumer } from "../Context";
import styled from "styled-components";
import Title from "../components/Title";
import emailjs from "emailjs-com";
import CloseSection from "../components/CloseSection";

export default class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      primary: true,
    };
  }

  changeColor() {
    this.setState({ primary: !this.state.primary });
  }
  changeDisabled() {}
  render() {
    let btn_class = this.state.primary ? "btn-primary" : "btn-done";
    let btn_text = this.state.primary ? "Send" : "Thanks! Message sent..";

    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_t56qaxo",
          "template_hiekcmr",
          e.target,
          "user_csSnq7aeEIAr0vHmDGd4k"
        )
        .then(
          (result) => {},
          (error) => {}
        );
      e.target.reset();
    }
    return (
      <PortfolioConsumer>
        {(value) => {
          const { modalContactOpen } = value;
          if (!modalContactOpen) {
            return null;
          } else {
            return (
              <React.Fragment>
                <CloseSection
                  onClick={() => {
                    value.closeContactModal();
                  }}
                />
                <Form className="contact-form" onSubmit={sendEmail}>
                  <Title title="Contact Me" />
                  <div class="form__group">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Full Name"
                      id="name"
                      name="name"
                      required
                    />
                    <label for="name" class="form__label">
                      Your name
                    </label>
                  </div>

                  <div class="form__group">
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Email address"
                      id="email"
                      name="email"
                      required
                    />
                    <label for="email" class="form__label">
                      Your email address
                    </label>
                  </div>

                  <div class="form__group">
                    <input
                      type="Message"
                      class="form__input"
                      placeholder="Your message.."
                      id="message"
                      name="message"
                      required
                    />
                    <label for="email" class="form__label">
                      Your message
                    </label>
                  </div>

                  <button
                    type="submit"
                    value="Send"
                    className={btn_class}
                    onClick={this.changeColor.bind(this)}
                    style={{ marginTop: "2rem" }}
                  >
                    <i className="fas fa-reply-all" /> {btn_text}
                  </button>
                  <div className="bottomContainer">
                    <span className="fa fa-envelope-o"></span>{" "}
                    info@yourgurunet.com
                    <span className="fas fa-phone-alt"></span>+371 27150201
                  </div>
                  <button
                    className="btn-close"
                    onClick={() => {
                      value.closeContactModal();
                    }}
                  >
                    <i className="fas fa-times-circle" title="Close" />
                  </button>
                </Form>
              </React.Fragment>
            );
          }
        }}
      </PortfolioConsumer>
    );
  }
}

const Form = styled.form`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 40rem;
  height: 50rem;
  background: var(--mainDark);
  border-radius: 1.2rem;
  box-shadow: 0 0.8rem 1rem 0 var(--mainAccent);
  margin: calc(50vh - 22rem) auto;
  padding: 2rem 3rem;
  max-width: calc(100vw - 4rem);
  box-sizing: border-box;
  z-index: 99;
  animation-name: growIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  .btn-close {
    color: var(--mainText);
    font-size: 3rem;
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  .btn-close:hover {
    color: var(--mainAccent);
  }

  .bottomContainer {
    position: absolute;
    bottom: -3rem;
    right: -2rem;
    background: var(--mainText);
    color: var(--mainDark);
    width: 32rem;
    padding: 1.6rem 0.4rem 1.6rem 0;
    border-radius: 0.6rem;
    font-size: 1.3rem;
    box-shadow: 0 0.8rem 1rem 0 var(--mainAccent);
  }
  span {
    margin: 0 0.5rem 0 1.5rem;
  }
  input {
    margin-left: 5%;
    font-size: 1.5rem;
    color: inherit;
    font-family: inherit;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.3rem solid var(--mainText);
    width: 90%;
    display: block;
    transition: all 0.3s;

    :focus {
      outline: none;
      box-shadow: 0 0.3rem 4rem 0 var(--mainAccent);
      border-bottom: 0.3rem solid var(--mainGreen);
    }

    :focus:invalid {
      border-bottom: 0.3rem solid red;
    }

    ::-webkit-input-placeholder {
      color: var(--mainText);
    }
  }

  .form__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    transform: translate(-4rem);
  }

  @media screen and (max-width: 300px) {
    .bottomContainer {
      width: 20rem;
    }
  }
`;
