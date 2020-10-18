import React from "react";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import img1 from "../images/background-home.jpg";
import ReactTypingEffect from "react-typing-effect";
import { PortfolioConsumer } from "../Context";
import { motion } from "framer-motion";

//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
};
//End Of page transitions
export default function Home() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <PortfolioConsumer>
        {(value) => (
          <StyledHero img={img1}>
            <Banner title="My name is Arvis iljins">
              <div style={{ minHeight: "5rem" }}>
                <ReactTypingEffect
                  text={[
                    "I'm Latvian Web Developer",
                    "Working as a Freelancer",
                    "I'm here to create your web world",
                  ]}
                  cursorRenderer={(cursor) => <h3>{cursor}</h3>}
                  displayTextRenderer={(text) => <p>{text}</p>}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={700}
                  typingDelay={1000}
                />
              </div>
              <button
                className="btn-primary"
                onClick={() => {
                  value.openPortfolioModal();
                }}
              >
                Portfolio
              </button>
            </Banner>
          </StyledHero>
        )}
      </PortfolioConsumer>
    </motion.div>
  );
}
