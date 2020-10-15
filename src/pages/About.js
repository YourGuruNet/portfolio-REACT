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
                <p style={{ marginBottom: "2rem", fontSize: "0.8rem" }}>
                  160 hours, 6 month intensive course. JavaScript Fundamentals
                  and basic object-oriented concepts using the latest JavaScript
                  syntax. Basics of jQuery, React and different most popular
                  frameworks
                </p>
              </div>
              <div className="column">
                <h6 className="uppercase">Riga coding school</h6>
                <p>C# Programming language </p>
                <p style={{ marginBottom: "2rem", fontSize: "0.8rem" }}>
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
                <h4 className="skills-btn uppercase">Other Skills</h4>
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
    padding: 0 10px;
  }

  /* Clear floats after the columns */
  .container:after {
    content: "";
    display: table;
    clear: both;
  }
  .container {
    box-shadow: 0 8px 10px 0 var(--mainAccent);
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
    text-align: justify;
  }
  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0.5rem 0;
  }
  h6 {
    margin-bottom: 0.2rem;
  }

  /* Responsive columns */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: 20px;
    }
  }
  /**************************************************** */
  .containerTab {
    width: 80%;

    margin: 0 2rem 2rem 2rem;
    color: white;
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
    width: 30%;
    padding: 0 10px;
    cursor: pointer;
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
  h5 {
    color: var(--mainText);
  }
  .methods {
    text-align: center;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0.5fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    margin-bottom: 1rem;
  }
  .methods-list:hover {
    background: var(--mainText);
    color: var(--mainAccent);
    box-shadow: 0 0 10px var(--mainAccent), 0 0 40px var(--mainAccent),
      0 0 80px var(--mainAccent);
  }
  .skills-btn:hover {
    color: var(--mainAccent);
  }
  .line {
    width: 80%;
    height: 1px;
    margin: 0 auto;
    background: var(--mainText);
    border: 0;
  }
  .uppercase {
    text-transform: uppercase;
  }
`;
