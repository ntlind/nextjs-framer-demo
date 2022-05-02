import { React } from "react";
import SlideInTransition from "../components/SlideInTransition.tsx";

export default function Hero() {
  return (
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
  );
}
