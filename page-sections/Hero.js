import { React } from "react";
import EaseInTransition from "../components/EaseInTransition.tsx";

export default function Hero() {
  return (
    <div id="hero" className={"section-header"}>
      <EaseInTransition delay={1} duration={1} initialY={50}>
        <div className="text-title-responsive mt-10">Hi, I'm Nick</div>
        <div className="text-subtitle-responsive text-gray-500 my-6">
          I design, code, and scale data science applications
        </div>
        <div className="mt-10"></div>
      </EaseInTransition>
    </div>
  );
}
