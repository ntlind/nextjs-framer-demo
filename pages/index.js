import { React, useState, useEffect } from "react";
import SEO from "../components/SEO.js";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import SlideInTransition from "../components/SlideInTransition.tsx";
import SlideinText from "../components/SlideInText.tsx";
import Hero from "../page-sections/Hero.js";
import Experience from "../page-sections/Experience.js";
import Portfolio from "../page-sections/Portfolio";
import Footer from "../page-sections/Footer.js";

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
    <div id="top" className="overflow-x-hidden h-screen">
      <SEO
        title="Work"
        description="Personal page for Nick Lind, and analytics and machine learning consultant"
      />

      <div id="hero" className={"section h-screen justify-center bg-eggshell"}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="initial"
              animate="open"
              exit="close"
              variants={variants}
              className="absolute z-0 bg-nearBlack top-0 left-0 w-screen lg:px-24 px-6 mx-auto"
            >
              <div className="grid grid-cols-12">
                <div className="h-screen-10/12 lg:h-0 col-span-12"></div>
                <div className="hidden lg:flex lg:col-span-7 flex-col text-2xl justify-end pb-36">
                  <SlideinText
                    delay={1}
                    duration={1.5}
                    text={[
                      {
                        id: 1,
                        content: "Nick is a data scientist and software",
                      },
                      { id: 2, content: "engineer currently working at" },
                      { id: 3, content: "Meta's Reality Labs" },
                    ]}
                  />
                </div>
                <div className="flex lg:hidden col-span-12 md:col-span-7 md:pt-10 flex-col text-2xl justify-end pb-36">
                  <SlideinText
                    delay={1}
                    duration={1.5}
                    text={[
                      {
                        id: 1,
                        content:
                          "Nick is a data scientist and software engineer currently working at Meta's Realiby Labs",
                      },
                    ]}
                  />
                </div>
                <motion.img
                  className="object-contain grayscale h-screen col-span-12 lg:col-span-5 absolute inset-0 lg:relative"
                  src={"./Headshot.webp"}
                ></motion.img>
                <div className="col-span-12 pb-10">
                  <Experience />
                  <Footer />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                <a
                  href="mailto:nthorlind@gmail.com"
                  target="_blank"
                  className="slide-middle slide-middle active"
                >
                  nthorlind@gmail.com
                </a>
              </button>
            </div>
          </SlideInTransition>
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
            <div className="">
              <motion.div
                key="content"
                initial={variants.contentinitial}
                animate={contentControls}
                exit={variants.contentclose}
                className="text-contrast"
              >
                <Hero />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>
      {!isOpen && (
        <div id="portfolio" className={"section justify-start bg-eggshell"}>
          <Portfolio />
          <SlideInTransition delay={1.1} duration={3}>
            <Footer />
          </SlideInTransition>
        </div>
      )}
    </div>
  );
}
