import React, { useEffect } from "react";
import styled from 'styled-components';
import websiteSvg from "../svg/website.svg";
import Roll from 'react-reveal/Roll';
// import Slider from "../components/Slider";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
          <HeroWrapper>
          <Roll left><Image src={websiteSvg} alt="Arvis iljins"/></Roll>
          <Roll right>
            <TextContainer>
              <h1>Hello!</h1>
              <h3>I'm Arvis, a
                  full-stack web developer
                  based in Latvia.</h3>
            </TextContainer>
          </Roll>
          </HeroWrapper>
          {/* <Slider /> */}
    </>
  );
}



const HeroWrapper = styled.header`
  font-family: 'Akshar', sans-serif;
  height: 80vh;
  max-width: 180rem;
  background: var(--main-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom: 0.01rem solid var(--mainAccent);
  margin: 0 10rem;
  
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap-reverse;
    margin: 12rem 2rem  5rem 2rem;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    margin: 2rem 2rem  5rem 2rem;
  }
`;

const TextContainer = styled.header`
width: 45rem;
margin-left: 5rem;
overflow: hidden;

h1 {
  font-size: 10rem;
  color: var(--mainAccent);
}
h3 {
  color: var(--mainText);
  font-size: 4rem;
}
@media screen and (max-width: 1100px) {
 text-align: center;
 margin-left: 0;
 margin-bottom: 2rem;
}
@media screen and (max-width: 600px) {
  h1 {
  font-size: 7rem;
}
h3 {
  font-size: 4rem;
}
  }
`;

const Image = styled.img`
max-width: 60rem;
width: 100%;
@media screen and (max-width: 1100px) {
max-height: 40rem;
}
`;


