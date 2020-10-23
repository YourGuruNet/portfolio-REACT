import React, { Component } from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import styled from "styled-components";
import image from "../images/profile.jpg";
//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
};
//End Of page transitions
export default class About extends Component {
  constructor() {
    super();

    this.state = {
      FrontEnd: false,
      BackEnd: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  changeFrontEnd() {
    this.setState({
      FrontEnd: !this.state.FrontEnd,
      BackEnd: !this.state.BackEnd,
    });
  }

  handleClick() {
    this.setState((state) => ({
      FrontEnd: false,
    }));
  }

  render() {
    let programmingSkills = this.state.FrontEnd
      ? "containerTab displayNone"
      : "containerTab ";

    let otherSkills = this.state.BackEnd
      ? "containerTab displayNone"
      : "containerTab";
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariant}
        transition={pageTransition}
      >
        <Content>
          <Title title="about me" />
          <div className="container">
            <div className="column">
              <div className="card">
                <h3 className="uppercase">View from the world in my design</h3>
                <p>
                  My name is Arvis Iljins and I'm co-founder of Your Guru Net.
                  My main job is to help shape the idea to the execution, and
                  taking part in building product. My passion is to live, to
                  enjoy the life. Most of people know me as professional
                  athlete, but there are more. I have traveled far away in the
                  world and saw a lot in it. When I'm working in formation
                  website I am transferring to you my acquired knowledge. First
                  one, that exploring starts with you, another, that knowledge
                  is power, but enthusiasm pulls the switch.
                </p>
                <h3 className="uppercase">Imagine and I will create it</h3>
                <p>
                  Anyone with an organization, a small business, or just a
                  passion needs a website to share it with the world. I can help
                  you to build amazing designed web pages for your business ore
                  just fun and easy blog pages. Tested for making it easy to
                  create full-featured, mobile-compatible sites on a budget and
                  with no coding required.
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={image} alt="Arvis Iljins" />
              </div>
            </div>
            <hr className="line" />
            <div className="row">
              <h3
                className="uppercase"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                Special Education
              </h3>
              <div className="column">
                <h6 className="uppercase">Business high-school Turiba</h6>
                <p>Javascript Programming language </p>
                <p className="school">
                  160 hours, 6 month intensive course. JavaScript Fundamentals
                  and basic object-oriented concepts using the latest JavaScript
                  syntax. Basics of jQuery, React and different most popular
                  frameworks
                </p>
              </div>
              <div className="column">
                <h6 className="uppercase">Riga coding school</h6>
                <p>C# Programming language </p>
                <p className="school">
                  60 hours, 9 weeks intensive course. C# and .NET programming
                  environment, OOP, SQL and working with databases, more complex
                  WEB service development XML, SOAP.
                </p>
              </div>
            </div>
            <hr className="line" />
            <div className="row">
              <div
                className="SkillColumn"
                onClick={this.changeFrontEnd.bind(this)}
              >
                <h4 className="skills-btn uppercase">Programming Skills</h4>
              </div>
              <div
                className="SkillColumn"
                onClick={this.changeFrontEnd.bind(this)}
              >
                <h4 className="skills-btn uppercase">
                  Other Skills <i className="fas fa-arrow-left" />
                </h4>
              </div>
            </div>
            {/*   */}
            <div id="b1" className={programmingSkills}>
              <ul className="methods">
                <span className="methods-list">
                  <li>
                    <i className="fab fa-html5" /> HTML
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-css3-alt" /> CSS
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-js-square" /> JavaScript
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-react" /> React
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fas fa-code-branch" /> C#
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fas fa-database" /> SQL
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-sass" /> SASS
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-github" /> Git
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fas fa-terminal" /> Terminal
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-bootstrap" /> Bootstrap
                  </li>
                </span>
              </ul>
            </div>

            <div id="b2" className={otherSkills}>
              <ul className="methods">
                <span className="methods-list">
                  <li>
                    <i className="fas fa-camera" /> PhotoShop
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fas fa-video" /> Video Editing
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-shopify" /> Shopify
                  </li>
                </span>
                <span className="methods-list">
                  <li>
                    <i className="fab fa-wix" /> WIX
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </Content>
      </motion.div>
    );
  }
}
const Content = styled.div`
  margin-top: 3rem;

  .column {
    float: left;
    width: 50%;
    padding: 0 1rem;
  }

  /* Clear floats after the columns */
  .container:after {
    content: "";
    display: table;
    clear: both;
  }
  .container {
    box-shadow: 0 0.8rem 1rem 0 var(--mainAccent);
    position: relative;
    left: 20%;
    right: 20%;
    width: 60%;
    margin: 2rem 0 2rem 0;
  }
  .row {
    margin: 2rem 2rem 0 2rem;
  }
  /* Style the counter cards */
  .card {
    text-align: center;

    margin: 1rem;
  }
  img {
    border-radius: 0.5rem;
    max-width: 100%;
  }
  p {
    font-size: 1.6rem;
    text-align: justify;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 2rem;
    margin: 0.5rem 0 0.5rem 0;
  }
  h6 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }
  h4 {
    font-size: 1.5rem;
  }

  .containerTab {
    width: 80%;
    margin: 0 2rem 2rem 2rem;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .displayNone {
    display: none;
  }
  .SkillColumn {
    float: left;
    width: 40%;
    padding: 0 1rem;
    cursor: pointer;
    margin-bottom: 0.8rem;
  }

  .links {
    text-align: center;
  }
  .links a {
    margin: 0 1rem;
  }
  .methods-list {
    color: var(--mainText);
  }
  .methods {
    text-align: center;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 0.5fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .methods-list:hover {
    background: var(--mainText);
    color: var(--mainAccent);
    box-shadow: 0 0 1rem var(--mainAccent), 0 0 4rem var(--mainAccent),
      0 0 8rem var(--mainAccent);
  }
  .skills-btn:hover {
    color: var(--mainAccent);
  }
  .line {
    width: 80%;
    height: 0.1rem;
    margin: 0 auto;
    background: var(--mainText);
    border: 0;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .school {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1200px) {
    .container {
      left: 10%;
      right: 10%;
      width: 80%;
    }
  }
  @media screen and (max-width: 1000px) {
    .SkillColumn {
      width: 40%;
    }
    p {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h6 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    .methods {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 700px) {
    .container {
      left: 5%;
      right: 5%;
      width: 90%;
    }
    .SkillColumn {
      width: 50%;
    }
    p {
      font-size: 1.1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    .column {
      padding: 0;
      margin-bottom: 0.2rem;
    }

    p {
      margin-bottom: 0.3rem;
    }
  }
`;
