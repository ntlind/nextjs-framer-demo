import React from "react";

import Experience from "../page-sections/Experience.js";
import CalendlyLink from "../components/CalendlyLink.js";
import EaseInTransition from "../components/EaseInTransition.tsx";

export default function About() {
  return (
    <div className="bg-nearBlack text-white">
      <div id="about" className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <img
            src="bio.webp"
            className={
              "rounded-lg max-h-96 lg:max-h-full black mx-auto my-auto"
            }
          />
          <div>
            <EaseInTransition>
              <div className="text-4xl lg:text-title mt-4 xl:mt-10">
                About me
              </div>
            </EaseInTransition>
            <EaseInTransition>
              <div className="text-gray-200 text-md mt-4 xl:mt-10">
                Data science leader and full-stack engineer focused on driving
                growth through actionable, interpretable analytics. 7+ years of
                experience across the Retail, CPG, and Healthcare sectors.
                Believes in using the right tools for the job, but loves to
                build in React, Python, and Julia.
                <br />
                <br />
                Off-road motorcyclist, rugby enthusiast, CodeLabs mentor, and
                dog lover currently residing in Denver, CO.
                <div className="mt-8">
                  <CalendlyLink
                    url="https://calendly.com/quantilegroup/30min"
                    text="Schedule meeting"
                    class_style="uppercase text-lg text-white font-light border-bottom-white mb-20 font-light tracking-wide cursor-pointer"
                  />
                </div>
              </div>
            </EaseInTransition>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
}
