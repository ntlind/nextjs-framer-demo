import { React } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header.js";

function SlideInTransition({
  children,
  delay = 0.55,
  duration = 0.8,
  initialX = 0,
  fontSize = "100%",
  renderOnce = true,
}) {
  const variants = {
    fadeIn: {
      initial: {
        opacity: 1,
        x: initialX,
        y: fontSize,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: duration,
          ease: [0, 0.55, 0.45, 1],
          staggerChildren: 0.1,
        },
      },
    },
  };
  return (
    <div className="overflow-hidden mt-4">
      <AnimatePresence>
        <motion.div
          initial="initial"
          variants={variants.fadeIn}
          whileInView="animate"
          viewport={{ once: renderOnce }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      id="hero"
      className={"section h-screen justify-center overflow-hidden bg-eggshell"}
    >
      <div className="flex flex-col justify-between h-screen">
        <Header />

        <SlideInTransition>
          <div className="text-title-responsive font-bold tracking-tight text-right">
            nick lind
          </div>
        </SlideInTransition>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <a className="underline mb-4">nthorlind@gmail.com</a>
            <span className="text-5xl font-bold">
              Recent
              <br /> Projects
            </span>
          </div>
          <span className="w-56 text-right text-sm">
            Nick is a data scientist and software engineer, currently working at
            Meta's Reality Labs
          </span>
        </div>
      </div>
    </div>
  );
}
