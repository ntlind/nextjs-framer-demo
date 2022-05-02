import { React, useState, useEffect } from "react";
import SEO from "../components/SEO.js";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import SlideInTransition from "../components/SlideInTransition.tsx";
import Hero from "../page-sections/Hero.js";

const animationDuration = 1.1;

const variants = {
  initial: { width: 0 },
  open: {
    width: "100vw",
    transition: {
      delay: 0.7,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  close: {
    width: 0,
    transition: {
      delay: 0.7,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
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
  contentinitial: {
    x: 0,
  },
  contentopen: {
    x: "100%",
    transition: {
      delay: 0.7,
      duration: animationDuration - 0.3,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  contentclose: {
    x: 0,
    transition: {
      delay: 0.7 + 0.3,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const contentControls = useAnimation();

  function onClick(boolean) {
    setIsOpen(boolean);
    if (boolean) {
      controls.start(variants.textopen);
      contentControls.start(variants.contentopen);
    } else {
      controls.start(variants.textclose);
      contentControls.start(variants.contentclose);
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
      <div
        id="hero"
        className={
          "section h-screen justify-center overflow-hidden bg-eggshell"
        }
      >
        <div className="flex flex-col justify-between h-screen">
          <SlideInTransition delay={0.55} duration={1}>
            <div className="flex justify-between items-center py-2 md:space-x-10 text-sm z-50">
              <div className="space-x-4">
                <button onClick={() => onClick(true)}>
                  <span
                    className={isOpen ? "slide-middle active" : "slide-middle"}
                  >
                    Bio
                  </span>
                </button>
                <button onClick={() => onClick(false)}>
                  <span
                    className={!isOpen ? "slide-middle active" : "slide-middle"}
                  >
                    Work
                  </span>
                </button>
              </div>
              <button onClick={onClick}>
                <span className="slide-middle">Contact</span>
              </button>
            </div>
          </SlideInTransition>
          ;
          <SlideInTransition>
            <AnimatePresence>
              <motion.div
                key="header"
                initial={variants.textinitial}
                animate={controls}
                exit={variants.textclose}
                className="text-title-responsive font-extrabold tracking-tight text-right"
              >
                nick lind
              </motion.div>
            </AnimatePresence>
          </SlideInTransition>
          <AnimatePresence>
            <motion.div
              key="content"
              initial={variants.contentinitial}
              animate={contentControls}
              exit={variants.contentclose}
            >
              <Hero />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
