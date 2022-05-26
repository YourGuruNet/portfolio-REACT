import React, { Component } from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
// import image from '../images/profile.jpg';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { FaSass } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BsTerminalFill } from 'react-icons/bs';
import { FaBootstrap } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';
import { DiBitbucket } from 'react-icons/di';
import { BsCodeSlash } from 'react-icons/bs';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      FrontEnd: false,
      BackEnd: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
      ? 'containerTab displayNone'
      : 'containerTab ';

    return (
      <>
        <Content>
          <Title title='about me' />
          <div className='container'>
            <div className='column'>
              <div className='card'>
                <h3 className='uppercase'>View from the world in my design</h3>
                <p>
                First, of all, exploring starts with you, second, knowledge is power, but enthusiasm pulls the switch. I have experience in website development using HTML, CSS, SCSS, JavaScript, React, C#, .NET, SQL, and also mobile cross-platform development with Flutter and React Native. Mentioned tools and languages are the ones I have used in real-world projects working with clients.
                </p>
                <h3 className='uppercase'>Imagine and I will create it</h3>
                <p>
                  Anyone with an organization, a small business, or just a
                  passion needs a website to share it with the world. I can help
                  you to build amazingly designed web pages for your business or
                  just fun and easy blog pages. Tested for making it easy to
                  create full-featured, mobile-compatible sites on a budget and
                  with no coding required.
                </p>
              </div>
            </div>

            <div className='column'>
              <div className='card'>
                {/* <img src={image} alt='Arvis Iljins' /> */}
              </div>
            </div>
            <hr className='line' />
            <div className='row'>
              <h3
                className='uppercase'
                style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Special Education
              </h3>
              <div className='column'>
                <h6 className='uppercase'>Business high-school Turiba</h6>
                <p>Javascript Programming language </p>
                <p className='school'>
                  160 hours, 6 month intensive course. JavaScript Fundamentals
                  and basic object-oriented concepts using the latest JavaScript
                  syntax. Basics of jQuery, React and different most popular
                  frameworks
                </p>
              </div>
              <div className='column'>
                <h6 className='uppercase'>10 + hours per day self-learning</h6>
                <p>Deep programming skill </p>
                <p className='school'>
                  There is no school that teaches everything to you, except your
                  passion for something. Technology changed every day and you
                  need to change together with the latest innovations, so learn
                  something new every day is the best key to success.
                </p>
              </div>
            </div>
            <hr className='line' />
            <div className='row'>
              <div
                className='SkillColumn'
               >
                <h4 className='skills-btn uppercase sub-heading'>
                  Programming Skills
                </h4>
              </div>
            </div>
            {/*   */}
            <div id='b1' className={programmingSkills}>
              <ul className='methods'>
                <span className='methods-list'>
                  <li>
                    <FaHtml5 /> HTML
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <FaCss3Alt /> CSS
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <SiJavascript /> JavaScript
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <FaReact /> React
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <SiCsharp /> C#
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <BsCodeSlash /> .Net
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <SiFlutter /> Flutter
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <FaSass /> SASS
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <SiFirebase /> Firebase
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <SiStrapi /> Strapi
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <AiFillApi /> API
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <FiGithub /> Git
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <DiBitbucket /> Bitbucket
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <BsTerminalFill /> Command-line
                  </li>
                </span>
                <span className='methods-list'>
                  <li>
                    <FaBootstrap /> Bootstrap
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </Content>
      </>
    );
  }
}
const Content = styled.div`
  padding-bottom: 7rem;
  margin: 3rem auto;
  max-width: 140rem;

  .column {
    float: left;
    width: 50%;
    padding: 0 1rem;
  }

  /* Clear floats after the columns */
  .container:after {
    content: '';
    display: table;
    clear: both;
  }
  .container {
    box-shadow: 0 0.8rem 1rem 0 var(--medium-blue);
    position: relative;
    left: 20%;
    right: 20%;
    width: 60%;
    margin: 2rem 0 5rem 0;
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
    hyphens: auto;
  }
  h3 {
    font-size: 2rem;
    margin: 0.5rem 0 0.5rem 0;
    color: var(--medium-blue);
  }
  h6 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
    color: var(--light-blue);
  }
  .sub-heading {
    font-size: 1.5rem;
    color: var(--light-blue);
  }

  .containerTab {
    width: 80%;
    margin: 0 2rem 2rem 2rem;
  }

  /* Clear floats after the columns */
  .row:after {
    content: '';
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
