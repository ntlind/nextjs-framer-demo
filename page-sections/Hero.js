import React from "react";
import { useInView } from "react-intersection-observer";

import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 150,
  });

  return (
    <div
      id="header"
      ref={ref}
      className={
        inView ? "section-header fade" : "section-header invisible z-1"
      }
    >
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
    </div>
  );
}
