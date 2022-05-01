import React from "react";
import NavBar from "../components/NavBar/NavBar.tsx";
import SlideInTransition from "../components/SlideInTransition.tsx";

export default function Header() {
  return (
    <div className={"bg-transparent"}>
      <SlideInTransition>
        <div className="flex justify-between items-center border-gray-100 py-2 md:space-x-10 text-sm">
          <div className="space-x-4">
            <a href="#">
              <span className="slide-left-right">Bio</span>
            </a>
            <a href="#">
              <span className="slide-left-right active">Work</span>
            </a>
          </div>
          <a href="#">
            <span className="slide-left-right">Contact</span>
          </a>
        </div>
      </SlideInTransition>
    </div>
  );
}
