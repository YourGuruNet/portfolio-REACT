import React from "react";
import { motion } from "framer-motion";
import PortfolioContainer from "../components/PortfolioContainer";
//Page Transitions
const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
};
//End Of page transitions

export default function Portfolio() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <PortfolioContainer />
    </motion.div>
  );
}
