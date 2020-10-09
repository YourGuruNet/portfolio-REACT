import React, { Component } from "react";
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
export default class About extends Component {
  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariant}
        transition={pageTransition}
      >
        <h1>Hello from about</h1>
        <h1>Hello from about</h1>
        <h1>Hello from about</h1>
      </motion.div>
    );
  }
}
