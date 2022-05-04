import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SlideInViewportTransition from "../components/SlideInViewportTransition.tsx";

const variants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  },
  card: {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.75,
      },
    },
  },
};

function ProjectCard({
  title,
  description,
  image_url,
  link_url,
  reverse = false,
  parentClass = "grid grid-cols-12",
  childClass = "col-start-3 col-span-4 cursor-pointer",
}) {
  return (
    <div className={parentClass}>
      <a className={childClass} href={link_url}>
        <SlideInViewportTransition>
          <img
            src={image_url}
            className={`mx-auto my-auto shadow-xl object-cover w-full aspect-video`}
          />
        </SlideInViewportTransition>
        <SlideInViewportTransition>
          <span className="uppercase">{title}</span>
        </SlideInViewportTransition>
      </a>
      <div
        className={
          reverse
            ? "col-span-10 col-start-2 lg:col-start-auto lg:col-span-2 lg:mx-4 lg:order-first"
            : "col-span-10 col-start-2 lg:col-start-auto lg:col-span-2 lg:mx-4"
        }
      >
        <SlideInViewportTransition>{description}</SlideInViewportTransition>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={variants.container}
        viewport={{ once: true }}
      >
        <div className="flex flex-col space-y-12 md:space-y-20">
          <ProjectCard
            title="anomaly-detection"
            description="An automated anomaly detection library for hierarchical time series."
            image_url="https://github.com/ntlind/anomaly-detection/raw/master/examples/example_graph.PNG"
            link_url="https://github.com/ntlind/anomaly-detection"
            reverse={false}
            parentClass="grid grid-cols-12"
            childClass="col-start-2 col-span-10 lg:col-start-3 lg:col-span-5 cursor-pointer"
          />
          <ProjectCard
            title="ForecastFrame"
            description="A fast, accurate, and interpretable hierarchical timeseries forecasting library."
            image_url="https://s.yimg.com/ny/api/res/1.2/MCBJaot4sCn8x1wTgmhEjg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://media.zenfs.com/en/simply_wall_st__316/01d1f05695ab07ad4c1f411240c3afe9"
            link_url="https://github.com/ntlind/forecastframe"
            reverse={false}
            parentClass="grid grid-cols-12"
            childClass="col-start-2 col-span-10 lg:col-start-7 lg:col-span-4 cursor-pointer"
          />
          <ProjectCard
            title="Next.js Landing Blog"
            description="A full Next.js landing page and blog built using Material UI's components."
            image_url="./blog_example.webp"
            link_url="https://github.com/ntlind/nextjs-react-landing-blog"
            reverse={true}
            parentClass="grid grid-cols-12 lg:text-right"
            childClass="col-start-2 col-span-10 lg:col-start-3 lg:col-span-5 cursor-pointer"
          />
          <ProjectCard
            title="This website"
            description="Built from scratch using React components on Next.js with Tailwind CSS."
            link_url="https://github.com/ntlind/nextjs-minimalist-websume"
            image_url="website_example.webp"
            reverse={false}
            parentClass="grid grid-cols-12"
            childClass="col-start-2 col-span-10 lg:col-start-7 lg:col-span-4 cursor-pointer"
          />
        </div>
      </motion.div>
    </div>
  );
}
