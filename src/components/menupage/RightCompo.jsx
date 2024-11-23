import React from "react";
import FlipLinks from "../linkAnime/FlipLinks";

function RightCompo({ footer = false }) {
  const elements = ["home", "Projects", "About", "Resume"];

  const filFunction = () => {
    return elements.filter((elem, index) => index > 0);
  };
  const displayElements = footer ? filFunction() : elements;

  return (
    <div className="w-full flex flex-col items-end py-10 gap-2">
      {displayElements.map((item, index) => (
        <FlipLinks key={index} href={"/"}>{item}</FlipLinks>
      ))}
    </div>
  );
}

export default RightCompo;
