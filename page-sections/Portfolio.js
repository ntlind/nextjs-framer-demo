import React from "react";
import Link from "@material-ui/core/Link";
import { useInView } from "react-intersection-observer";

function ProjectCard({
  title,
  description,
  image_url,
  link_url,
  link_text,
  reverse,
}) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div ref={ref} className={inView ? "fade" : "invisible"}>
        <div
          className={
            "grid grid-cols-1 my-auto mx-6 flex-1 text-center lg:text-left"
          }
        >
          <p className="text-4xl py-6">{title}</p>
          <p className="text-lightGrayText text-md lg:pr-16"> {description}</p>
          <div className="mt-12">
            <Link href={link_url} underline="none">
              <a className="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                {link_text}
              </a>
            </Link>
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
  );
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="text-4xl lg:text-title mb-16">Recent Projects</div>
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
    </div>
  );
}
