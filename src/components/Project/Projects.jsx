import React from "react";
import Proj from "./Proj";
import ProjectData from "./ProjectData.json";
import Border from "../heroSection/Border";
import ContactMe from "../About/ContactMe";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="w-full pb-3"
    >
      <div className="w-full sm:py-24 py-20 font-Poppins font-semibold xl:px-[4.5rem] sm:px-[2vw] px-5">
        <div className="xl:h-32 sm:h-28 flex items-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.5, 1, 0.89, 1] }}
            className="xl:text-[5.6vw] lg:text-[5.6vw] md:text-[7vw] sm:text-[8vw] text-[10.5vw]"
          >
            Projects
          </motion.h1>
        </div>

        <div className="sm:mt-0 mt-2">
          <Border />
        </div>

        <div className="text-start pt-5">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="font-Poppins xl:text-[1.3vw] lg:text-[1.6vw] md:text-[2.1vw] sm:text-[2.6vw] text-[4.5vw] leading-none font-light pb-2"
            >
              I'd be excited for a collaboration opportunity in your next
              venture.
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="font-Poppins xl:text-[1vw] lg:text-[1.3vw] md:text-[1.6vw] sm:text-[2vw] text-[4vw] leading-none font-extralight pb-2 text-zinc-300"
            >
              Bring your vision into the world and watch it make a difference!
            </motion.h3>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="font-Poppins xl:text-[1.3vw] lg:text-[1.6vw] md:text-[2.1vw] sm:text-[2.6vw] text-[4.5vw] leading-none font-light"
            >
              Reach out and let's set up a chat.
            </motion.h2>
          </div>

          <div className="w-[100%]">
            <ContactMe />
          </div>
        </div>
      </div>
      
      <div className="bg-neutral-950 rounded-t-2xl py-14 xl:px-[4.5rem] sm:px-[2vw] px-5">
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
    </motion.div>
  );
}

export default Projects;
