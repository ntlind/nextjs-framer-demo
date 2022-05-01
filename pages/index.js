import React from "react";

import SEO from "../components/SEO.js";

import Hero from "../page-sections/Hero.js";
import About from "../page-sections/About.js";
import Portfolio from "../page-sections/Portfolio.js";
import Services from "../page-sections/Services.js";
import Contact from "../page-sections/Contact.js";
import Footer from "../page-sections/Footer.js";

export default function Home() {
  return (
    <div id="top" className="overflow-x-hidden h-screen">
      <SEO
        title="Work"
        description="Personal page for Nick Lind, and analytics and machine learning consultant"
      />
      <Hero />
    </div>
  );
}
