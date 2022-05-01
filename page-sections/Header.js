import React from "react";
import NavBar from "../components/NavBar/NavBar.tsx";
import EaseInTransition from "../components/EaseInTransition.tsx";

export default function Header() {
  return (
    <div className={"bg-transparent pt-4 w-screen"}>
      <EaseInTransition delay={0.35}>
        <div className="max-w-screen-xl mx-auto	lg:px-40 px-6">
          <div className="flex justify-between items-center border-gray-100 py-2 md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="text-xl md:text-3xl font-medium">
                  nick lind
                </span>
              </a>
            </div>
            <NavBar />
          </div>
        </div>
      </EaseInTransition>
    </div>
  );
}
