import { React } from "react";
import SlideInTransition from "../components/SlideInTransition.tsx";
import SlideinText from "../components/SlideInText.tsx";

export default function Header({ props }) {
  return (
    <div className="flex justify-between items-center py-2 md:space-x-10 z-50">
      <div className="space-x-4">
        <button onClick={() => props.onClick(true)}>
          <span
            className={props.isOpen ? "slide-middle active" : "slide-middle"}
          >
            Bio
          </span>
        </button>
        <button onClick={() => props.onClick(false)}>
          <span
            className={!props.isOpen ? "slide-middle active" : "slide-middle"}
          >
            Work
          </span>
        </button>
      </div>
      <button onClick={props.onClick}>
        <a
          href="mailto:nthorlind@gmail.com"
          target="_blank"
          className="slide-middle slide-middle active"
        >
          nthorlind@gmail.com
        </a>
      </button>
    </div>
  );
}
