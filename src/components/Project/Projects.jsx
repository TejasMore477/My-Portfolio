import React from "react";
import Proj from "./Proj";
import ProjectData from "./ProjectData.json";
import Border from "../heroSection/Border";
import ContactMe from "../About/ContactMe";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="">
      <div className="w-full py-24 px-[4.5rem] font-Poppins font-semibold">
        <div className="h-32 flex items-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: false }}
            animate={{ opacity: 1, y: 0 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.3, ease: [0.5, 1, 0.89, 1] }}
            className="text-[5rem]"
          >
            Projects
          </motion.h1>
        </div>
        <Border />
        <div className="text-start pt-5">
              <div className=" overflow-hidden h-9">
              <motion.h2
            initial={{ opacity: 0, x: "-60%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.6,
              delay: 0.2,
              ease: [0.5, 1, 0.89, 1],
            }}
            className="font-Poppins text-xl leading-none font-light pb-4"
          >
            I'd be excited for a collaboration opportunity in your next venture.
          </motion.h2>
              </div>
              <div className=" overflow-hidden h-6">
              <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.3,
              delay: 1.5,
              ease: [0.5, 1, 0.89, 1],
            }}
            className="font-Poppins text-sm leading-none font-extralight pb-4 text-zinc-300"
          >
            Bring your vision into the world and watch it make a difference!
          </motion.h3>
              </div>    
              <div className=" overflow-hidden h-8">
              <motion.h2
            initial={{ opacity: 0, x: "-60%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.6,
              delay: 0.2,
              ease: [0.5, 1, 0.89, 1],
            }}
            className="font-Poppins text-xl leading-none font-light"
          >
            Reach out and let's set up a chat.
          </motion.h2>
              </div>
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
