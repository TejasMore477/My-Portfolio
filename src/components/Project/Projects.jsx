import React from "react";
import Proj from "./Proj";
import ProjectData from "./ProjectData.json";
import Border from "../heroSection/Border";
import ContactMe from "../About/ContactMe";

function Projects(handelMenu, showMenu, setShowMenu) {
  return (
    <div className="">
      <div className="w-full py-24 px-[4.5rem] font-Poppins font-semibold">
        <h1 className="text-[5rem]">Featured Projects </h1>
        <Border />
        <div className="text-start pt-5">
          <h2 className="font-Poppins text-xl leading-none font-light pb-4">
            I'd be excited for a collaboration opportunity in your next venture.
          </h2>
          <h3 className="font-Poppins text-sm leading-none font-extralight pb-4 text-zinc-300">
            Bring your vision into the world and watch it make a difference!
          </h3>
          <h2 className="font-Poppins text-xl leading-none font-light">
            Reach out and let's set up a chat.
          </h2>
          <div className="w-[100%]">
            <ContactMe />
          </div>
        </div>
      </div>
      {ProjectData.map((project, index) => (
        <Proj
          key={index}
          imgUrl={project.Image}
          subheading={project.SubHeading}
          heading={project.Heading}
          descriptionData={project}
        />
      ))}
    </div>
  );
}

export default Projects;
