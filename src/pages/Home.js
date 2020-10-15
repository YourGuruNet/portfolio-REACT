import React from "react";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import img1 from "../images/background-home.jpg";
import Typical from "react-typical";
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
              <Typical
                className="text-typed"
                steps={[
                  "I'm Latvian Web Developer",
                  2000,
                  "Working as a Freelancer",
                  2000,
                  "I'm here to create your web world",
                  2000,
                ]}
                loop={1}
                wrapper="p"
              />
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
