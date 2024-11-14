import React from "react";
import Proj from "./Proj";
import ProjectData from "./ProjectData.json";

function Projects() {
  return (
    <div>
      {ProjectData.map((project, index) => (
        <Proj
          key={index}
          imgUrl={project.Image}
          subheading="Collaborate"
          heading="Built for all of us."
          descriptionData={project}
        />
      ))}
    </div>
  );
}

export default Projects;
