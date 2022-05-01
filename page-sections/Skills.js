import React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#00b0ff",
  },
}))(LinearProgress);

function SkillCard({ title, progress }) {
  return (
    <div className="grid grid-cols-4 gap-6 bg-transparent py-3">
      <div className="col-span-2  flex flex-wrap content-center">
        <div className="text-lg">{title}</div>
      </div>
      <div className="col-span-2 flex flex-col justify-center relative">
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  );
}

function TechCard({ image, progress }) {
  return (
    <div className="grid grid-cols-4 gap-8 bg-transparent py-4 lg:py-6">
      <div className="col-span-2  flex flex-wrap content-center">
        <img src={image} className="filter-grayscale rounded-lg max-h-12" />{" "}
      </div>
      <div className="col-span-2 flex flex-col justify-center">
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="pt-16 bg-nearBlack text-white">
      <div
        id="skills"
        className="max-w-screen-xl	mx-auto flex flex-col justify-center "
      >
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-4 xl:mt-10">
          <div>
            <div className={"text-4xl pb-6"}>Back-End & ML</div>
            <SkillCard title="Python" progress={100} />
            <SkillCard title="Spark" progress={96} />
            <SkillCard title="SQL" progress={95} />
            <SkillCard title="Scala" progress={75} />
            <SkillCard title="GCP, AWS, and Azure" progress={68} />
          </div>
          <div>
            <div className={"text-4xl pb-6"}>Front-End</div>
            <SkillCard title="Django" progress={90} />
            <SkillCard title="HTML + CSS" progress={80} />
            <SkillCard title="React.js" progress={70} />
            <SkillCard title="Celery + RPC" progress={70} />
            <SkillCard title="jQuery" progress={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

// <SkillCard title="Data Science" progress="90" />
// <SkillCard title="Product Strategy" progress="90" />
// <SkillCard title="Machine Learning" progress="80" />
// <SkillCard title="Product Development" progress="80" />
// <SkillCard title="A/B Testing" progress="65" />
