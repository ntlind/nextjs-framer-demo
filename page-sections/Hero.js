import { React } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideInTransition from "../components/SlideInTransition.tsx";
import SlideinText from "../components/SlideInText.tsx";

export default function Hero({ props }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="content"
          initial={props.variants.contentinitial}
          animate={props.contentControls}
          exit={props.variants.contentclose}
          className="text-contrast"
        >
          <div className="flex justify-between items-center text-contrast">
            <div className="flex flex-col">
              <span className="text-5xl font-bold">
                <SlideinText
                  delay={1}
                  duration={3}
                  text={[
                    {
                      id: 1,
                      content: "Recent",
                    },
                    { id: 2, content: "Projects" },
                  ]}
                />
              </span>
            </div>
            <div className="text-right hidden md:block">
              <SlideinText
                delay={1}
                duration={3}
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
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
