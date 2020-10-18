import React, { Component } from "react";
import { PortfolioConsumer } from "../Context";
import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "../components/Title";
import emailjs from "emailjs-com";

//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
};
//End Of page transitions

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
    let btn_text = this.state.primary ? "Send" : "Done";
    let btn_disabled = false;

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
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                transition={pageTransition}
              >
                <CloseSection
                /* onClick={() => {
                    value.closeContactModal();
                  }}*/
                >
                  <Form className="contact-form" onSubmit={sendEmail}>
                    <Title title="Contact Me" />
                    <p type="Name:">
                      <input placeholder="Your Name" name="name"></input>
                    </p>
                    <p type="Email:">
                      <input placeholder="Your Email" name="email"></input>
                    </p>
                    <p type="Message:">
                      <input placeholder="Message.." name="message"></input>
                    </p>
                    <button
                      type="submit"
                      value="Send"
                      className={btn_class}
                      onClick={this.changeColor.bind(this)}
                      disabled={btn_disabled}
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
                </CloseSection>
              </motion.div>
            );
          }
        }}
      </PortfolioConsumer>
    );
  }
}

const CloseSection = styled.div`
  color: rgba(2, 2, 34, 0.404);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 99999;
  .btn-close {
    color: var(--mainText);
    font-size: 2rem;
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
`;
const Form = styled.form`
  width: 400px;
  height: 500px;
  background: var(--mainDark);
  border-radius: 12px;
  box-shadow: 0 8px 10px 0 var(--mainAccent);
  margin: calc(50vh - 220px) auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  position: relative;
  z-index: 9999999;

  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: var(--mainText);
  }
  input {
    color: var(--mainText);
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s;
    border-bottom: 2px solid var(--mainText);
  }
  input:focus {
    outline: none !important;
    border-bottom: 2px solid var(--mainText);
  }
  .bottomContainer {
    content: "Hi";
    position: absolute;
    bottom: -30px;
    right: -20px;
    background: var(--mainText);
    color: var(--mainDark);
    width: 320px;
    padding: 16px 4px 16px 0;
    border-radius: 6px;
    font-size: 13px;
    box-shadow: 0 8px 10px 0 var(--mainAccent);
  }
  span {
    margin: 0 5px 0 15px;
  }
  @media screen and (max-width: 300px) {
    .bottomContainer {
      width: 200px;
    }
  }
`;
