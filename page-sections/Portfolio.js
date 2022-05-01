import React from "react";
import { motion } from "framer-motion";

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
  link_text,
  reverse,
}) {
  return (
    <motion.div variants={variants.card}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div
            className={
              "grid grid-cols-1 my-auto mx-6 flex-1 text-center lg:text-left"
            }
          >
            <p className="text-4xl py-6">{title}</p>
            <p className="text-gray-500 text-md lg:pr-16"> {description}</p>
            <div className="mt-12">
              <a
                href={link_url}
                className="uppercase text-link-responsive text-black border-bottom font-light tracking-wide cursor-pointer"
              >
                {link_text}
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={image_url}
            className="rounded-lg black mx-auto my-auto shadow-xl object-cover"
          />{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="text-4xl lg:text-title mb-16">Recent Projects</div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={variants.container}
        viewport={{ once: true }}
      >
        <div className="flex flex-col space-y-24">
          <ProjectCard
            title="anomaly-detection"
            description="An automated anomaly detection library for hierarchical time series."
            image_url="https://github.com/ntlind/anomaly-detection/raw/master/examples/example_graph.PNG"
            link_text="View on GitHub"
            link_url="https://github.com/ntlind/anomaly-detection"
          />
          <ProjectCard
            title="ForecastFrame"
            description="A fast, accurate, and interpretable hierarchical timeseries forecasting library."
            image_url="https://s.yimg.com/ny/api/res/1.2/MCBJaot4sCn8x1wTgmhEjg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://media.zenfs.com/en/simply_wall_st__316/01d1f05695ab07ad4c1f411240c3afe9"
            link_text="View on GitHub"
            link_url="https://github.com/ntlind/forecastframe"
          />
          <ProjectCard
            title="Next.js Landing Blog"
            description="A full Next.js landing page and blog built using Material UI's components."
            image_url="./blog_example.webp"
            link_text="View on GitHub"
            link_url="https://github.com/ntlind/nextjs-react-landing-blog"
          />
          <ProjectCard
            title="This website"
            description="Built from scratch using React components on Next.js with Tailwind CSS."
            link_url="https://github.com/ntlind/nextjs-minimalist-websume"
            link_text="View on GitHub"
            image_url="website_example.webp"
          />
        </div>
      </motion.div>
    </div>
  );
}
