import { React } from "react";
import Header from "./Header.js";
import SlideInTransition from "../components/SlideInTransition.tsx";

export default function Hero() {
  return (
    <div
      id="hero"
      className={"section h-screen justify-center overflow-hidden bg-eggshell"}
    >
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <SlideInTransition>
          <div className="text-title-responsive font-extrabold tracking-tight text-right">
            nick lind
          </div>
        </SlideInTransition>
        <div className="flex justify-between items-center text-contrast">
          <div className="flex flex-col">
            <a className="underline mb-4">nthorlind@gmail.com</a>
            <span className="text-5xl font-bold">
              Recent
              <br /> Projects
            </span>
          </div>
          <span className="w-56 text-right text-sm">
            Nick is a data scientist and software engineer, currently working at
            Meta's Reality Labs
          </span>
        </div>
      </div>
    </div>
  );
}
