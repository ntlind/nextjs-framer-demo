import { React, useState, useEffect } from "react";
import SEO from "../components/SEO.js";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Hero from "../page-sections/Hero.js";

const animationDuration = 1.1;

const variants = {
  initial: { width: 0 },
  open: {
    width: "100vw",
    transition: { delay: 0.7, duration: animationDuration },
  },
  close: {
    width: 0,
    transition: { delay: 0.7, duration: animationDuration },
  },
  textinitial: {
    x: 0,
  },
  textopen: {
    x: "-54%",
    transition: {
      delay: 0.7,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  textclose: {
    x: 0,
    transition: {
      delay: 0.7,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  function onClick(boolean) {
    setIsOpen(boolean);
    if (boolean) {
      controls.start(variants.textopen);
    } else {
      controls.start(variants.textclose);
    }
  }

  return (
    <div id="top" className="overflow-x-hidden h-screen">
      <SEO
        title="Work"
        description="Personal page for Nick Lind, and analytics and machine learning consultant"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="open"
            exit="close"
            variants={variants}
            className="absolute z-0 text-4xl text-white bg-black top-0 left-0 h-screen"
          ></motion.div>
        )}
      </AnimatePresence>
      <Hero
        variants={variants}
        controls={controls}
        headerLinks={
          <div className="flex justify-between items-center py-2 md:space-x-10 text-sm z-50">
            <div className="space-x-4">
              <button onClick={() => onClick(true)}>
                <span className="slide-left-right">Bio</span>
              </button>
              <button onClick={() => onClick(false)}>
                <span className="slide-left-right active">Work</span>
              </button>
            </div>
            <button onClick={onClick}>
              <span className="slide-left-right">Contact</span>
            </button>
          </div>
        }
      />
    </div>
  );
}
