import React from "react";
import { useInView } from "react-intersection-observer";

import Drawer from "@material-ui/core/Drawer";

import { Link as ScrollLink } from "react-scroll";

function ScrollButton({ text, section }) {
  return (
    <ScrollLink
      to={section}
      smooth={true}
      duration={800}
      delay={10}
      className="text-lightGrayText hover:text-black uppercase text-link-responsive font-light cursor-pointer"
    >
      {text}
    </ScrollLink>
  );
}

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function handleClick() {
    setNavbarOpen(!navbarOpen);
  }

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const rightLinks = (
    <nav className="hidden md:flex space-x-10">
      <ScrollButton text="About" section="about" />
      <ScrollButton text="Portfolio" section="portfolio" />
      <ScrollButton text="Services" section="services" />
      <ScrollButton text="Contact" section="contact" />
    </nav>
  );

  return (
    <div
      ref={ref}
      className={
        inView
          ? "relative bg-white mt-10 md:fade"
          : "relative bg-white mt-10 md:invisible"
      }
    >
      <div className="max-w-screen-xl mx-auto	lg:px-40 px-6">
        <div className="flex justify-between items-center border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="text-3xl font-medium">nick lind</span>
            </a>
          </div>
          <button type="button" className="md:hidden" onClick={handleClick}>
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {navbarOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!navbarOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={navbarOpen}
            classes={{ paper: "w-3/6 space-y-10 px-6 py-10 md:hidden" }}
            onClose={handleClick}
          >
            <a
              href="/#about"
              onClick={handleClick}
              className="text-gray relative text-2xl hover:text-black uppercase font-light"
            >
              About
            </a>
            <a
              href="/#portfolio"
              onClick={handleClick}
              className="text-gray relative text-2xl hover:text-black uppercase font-light"
            >
              Portfolio
            </a>
            <a
              href="/#services"
              onClick={handleClick}
              className="text-gray relative text-2xl hover:text-black uppercase font-light"
            >
              Services
            </a>
            <a
              href="/#contact"
              onClick={handleClick}
              className="text-gray relative text-2xl hover:text-black uppercase font-light"
            >
              Contact
            </a>
          </Drawer>
          {rightLinks}
        </div>
      </div>
    </div>
  );
}
