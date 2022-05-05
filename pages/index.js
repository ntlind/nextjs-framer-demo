import { React, useState, useEffect } from "react";
import SEO from "../components/SEO.tsx";
import { useAnimation } from "framer-motion";
import SlideInTransition from "../components/SlideInTransition.tsx";
import Header from "../page-sections/Header.js";
import Hero from "../page-sections/Hero.js";
import Bio from "../page-sections/Bio.js";
import Portfolio from "../page-sections/Portfolio";
import Footer from "../page-sections/Footer.js";
import {
  AnimatePresence,
  Align,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
const animationDuration = 1.1;

const variants = {
  initial: { x: "-100vw" },
  open: {
    x: 0,
    transition: {
      delay: 0.7,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  close: {
    x: "-100vw",
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
    x: "-52%",
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
    x: "120%",
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
    <div
      id="top"
      className="overflow-x-hidden hide-scrolling h-screen text-responsive"
    >
      <SEO
        title="Work"
        description="Personal page for Nick Lind, and analytics and machine learning consultant"
      />
      <div className={"bg-eggshell"}>
        <AnimatePresence>
          {isOpen && (
            <Bio
              props={{
                variants: variants,
                controls: controls,
                contentControls: contentControls,
              }}
            />
          )}
        </AnimatePresence>
        <div className="h-screen flex flex-col justify-between section">
          <SlideInTransition delay={0.55} duration={1}>
            <Header props={{ isOpen: isOpen, onClick: onClick }} />
          </SlideInTransition>
          <Hero
            props={{
              variants: variants,
              controls: controls,
              contentControls: contentControls,
            }}
          />
        </div>
        {!isOpen && (
          <div className="text-contrast">
            <div className="section">
              <Portfolio />
            </div>
            <div className="section-x">
              {" "}
              <SlideInTransition delay={1.1} duration={3}>
                <Footer />
              </SlideInTransition>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
