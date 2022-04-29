import React from "react";
import { useInView } from "react-intersection-observer";

function ExperienceCard({ title, company, date, logo }) {
  return (
    <div className="grid grid-cols-5 gap-4 bg-transparent py-4">
      <div className="col-span-1  flex flex-wrap content-center">
        <img src={logo} className="rounded-lg max-h-16 black mx-auto my-auto" />
      </div>
      <div className="col-span-4">
        <div className="text-lg">{title}</div>
        <p className="my-2 text-md text-nearWhite">
          {company}, {date}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="bg-nearBlack text-white">
      <div
        id="experience"
        ref={ref}
        className={
          inView
            ? "max-w-screen-xl mx-auto pb-20 lg:px-40 px-6 flex flex-col justify-center fade"
            : "max-w-screen-xl mx-auto pb-20 lg:px-40 px-6 flex flex-col justify-center invisible"
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg: gap-12 mt-4 xl:mt-10">
          <div>
            <div className={"text-4xl mt-4 xl:mt-10 pb-6 fade"}>Experience</div>
            <ExperienceCard
              title="Co-Founder, Product"
              company="Quantile"
              date="2020-Present"
              logo="/experience_logos/quantile.webp"
            />
            <ExperienceCard
              title="Engagement Manager"
              company="Monitor Deloitte"
              date="2018-2020"
              logo="/experience_logos/deloitte.webp"
            />
            <ExperienceCard
              title="Senior Data Scientist"
              company="IBM"
              date="2017-2017"
              logo="/experience_logos/ibm.webp"
            />
            <ExperienceCard
              title="Consultant"
              company="Deloitte Consulting"
              date="2013-2016"
              logo="/experience_logos/deloitte.webp"
            />
            <ExperienceCard
              title="Econometrics Tutor"
              company="University of Colorado"
              date="2011-2013"
              logo="/experience_logos/cu.webp"
            />
          </div>
          <div>
            <div className={"text-4xl mt-4 xl:mt-10 pb-6"}>Education</div>
            <ExperienceCard
              title="MBA, Strategy & Statistics"
              company="The Wharton School"
              date="2016-2018"
              logo="/experience_logos/wharton.webp"
            />{" "}
            <ExperienceCard
              title="BA, Math & Econometrics"
              company="University of Colorado"
              date="2011-2013"
              logo="/experience_logos/cu.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
