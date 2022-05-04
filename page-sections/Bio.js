import { React } from "react";
import SlideinText from "../components/SlideInText.tsx";
import Experience from "./Experience.js";
import Footer from "./Footer.js";

import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function Bio({ props }) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const o1 = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      initial="initial"
      animate="open"
      exit="close"
      variants={props.variants}
      className="absolute z-0 bg-nearBlack top-0 left-0  w-full"
    >
      <motion.img
        className="object-contain grayscale h-screen absolute right-0 w-8/12 lg:w-full object-right"
        src={"./Headshot.webp"}
        style={{ y: y1, opacity: o1 }}
      ></motion.img>
      <div className=" h-screen grid grid-rows-4 section">
        <div className="row-span-3"></div>
        <div className="row-span-1">
          <div className="hidden sm:flex lg:col-span-7 flex-col text-2xl justify-end pb-24">
            <SlideinText
              delay={1}
              duration={1.5}
              text={[
                {
                  id: 1,
                  content: "Nick is a data scientist and software engineer",
                },
                {
                  id: 2,
                  content: "currently working at Meta's Reality Labs. ",
                },
                { id: 3, content: "Sometimes, when he's looking for a" },
                { id: 4, content: "challenge, he copies great" },
                { id: 5, content: "websites using Next.js " },
              ]}
            />
          </div>
          <div className="flex sm:hidden col-span-12 md:col-span-7 md:pt-10 flex-col text-xl justify-end pb-24">
            <SlideinText
              delay={1}
              duration={1.5}
              text={[
                {
                  id: 1,
                  content:
                    "Nick is a data scientist and software engineer currently working at Meta's Realiby Labs. Sometimes, when he's looking for a challenge, he copies the design of great website using Next.js",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="section-x -pt-4 ">
        <Experience />
        <Footer />
      </div>
    </motion.div>
  );
}
