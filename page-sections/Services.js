import React from "react";
import EaseInTransition from "../components/EaseInTransition.tsx";
import Skills from "../page-sections/Skills.js";

function InfoCard({ title, description, tags }) {
  return (
    <div className="bg-gray rounded">
      <div className="p-10 pb-10">
        <div className="text-xl mb-6">{title}</div>
        <p className="text-gray-200 text-md">{description}</p>
      </div>
    </div>
  );
}

export function OldServices() {
  return (
    <div className="bg-nearBlack">
      <div className="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
        <div className="text-4xl lg:text-title mt-4 xl:mt-10">Our services</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 xl:mt-10">
          <InfoCard
            title="Product Mgmt."
            description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
  Voluptatibus quia, nulla!"
          />
          <InfoCard
            title="Data Science"
            description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
  Voluptatibus quia, nulla!"
          />
          <InfoCard
            title="Machine Learning"
            description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
Voluptatibus quia, nulla!"
          />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-nearBlack text-white">
      <div id="services" className="section">
        <EaseInTransition initialY={50}>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg: gap-12">
            <div className="text-4xl lg:text-title">
              Areas of <br /> expertise
            </div>
            <div className="grid grid-rows-3 gap-6 mt-10 lg:mt-0">
              <div>
                <div className="text-2xl">Machine Learning</div>
                <p className="text-gray-200 text-md mt-4">
                  I build accurate, interpretable forecasting engines to
                  understand and predict future events.
                </p>
              </div>
              <div>
                <div className="text-2xl">Product Management</div>
                <p className="text-gray-200 text-md mt-4">
                  I bridge the gap between executives, users, and engineers to
                  build sustainable software products.
                </p>
              </div>
              <div>
                <div className="text-2xl">Data Science</div>
                <p className="text-gray-200 text-md mt-4">
                  I mine massive distributed datasets to uncover relationships,
                  validate hypotheses, and share stories.
                </p>
              </div>
            </div>
          </div>
          <Skills />
        </EaseInTransition>
      </div>
    </div>
  );
}
