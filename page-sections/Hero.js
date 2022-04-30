import { React } from "react";
import EaseInTransition from "../components/EaseInTransition.tsx";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <div id="header" className={"section-header"}>
      <EaseInTransition delay={1} duration={1} initialY={50} renderOnce={false}>
        <div className="text-title-responsive">Hi, I'm Nick</div>
        <div className="text-subtitle-responsive text-lightGrayText my-6">
          I design, code, and scale data science applications
        </div>
        <div className="mt-10">
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            delay={10}
            className="uppercase text-link-responsive text-black border-bottom font-light tracking-wide cursor-pointer"
          >
            Learn more
          </ScrollLink>
        </div>
      </EaseInTransition>
    </div>
  );
}
