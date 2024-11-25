import React from "react";
import FlipLinks from "../linkAnime/FlipLinks";
import Projects from "../Project/Projects";

function RightCompo({ footer = false }) {
  // const elements = ["home", "Projects", "About", "Resume"];
  const navLinks = [
    {navlink:"home",link:"/"},
    {navlink:"Project",link:"/projects"},
    {navlink:"About",link:"/about"},
    {navlink:"Resume",link:"/resume"}
  ]

  const filFunction = () => {
    return navLinks.filter((elem, index) => index > 0);
  };
  const displayElements = footer ? filFunction() : navLinks;

  return (
    <div className="w-full flex flex-col items-end py-10 gap-2">
      {displayElements.map((item, index) => (
        <FlipLinks key={index} href={item.link}>{item.navlink}</FlipLinks>
      ))}
    </div>
  );
}

export default RightCompo;
