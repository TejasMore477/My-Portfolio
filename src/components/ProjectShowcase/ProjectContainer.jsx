import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

import i1 from "/src/assets/images/projects/ProjectObays.png";
import i2 from "/src/assets/images/projects/ProjectOchi.png";
import i3 from "/src/assets/images/projects/ProjectRefokus.png";
import i4 from "/src/assets/images/projects/ProjectArock.png";
import v1 from "/src/assets/videos/project/Obys-Showreel-2022-fixed.mp4";
import v2 from "/src/assets/videos/project/Ochi-Showreel-fixed.mp4";
import v3 from "/src/assets/videos/project/Refokus-Showreel-Fixed.mp4";
import v4 from "/src/assets/videos/project/Arock-Showreel-fixed.mp4";

function ProjectContainer() {
  const data = [
    {
      heading: "Obays",
      subHeading: "Design Agency - Ukraine",
      image: i1,
      video: v1,
      link: "https://tejasmore477.github.io/Minor-project-4-Obays-Agency-Clone/",
      bgColor: "",
    },
    {
      heading: "Ochi",
      subHeading: "Design Agency - Lviv",
      image: i2,
      video: v2,
      link: "https://tejasmore477.github.io/Minor-Project-5-Ochi-UI-React/",
      bgColor: "",
    },
    {
      heading: "AROCK",
      subHeading: "Site Of The Day on Awwwards.com",
      image: i3,
      video: v3,
      link: "https://arock-portfolio.vercel.app/",
      bgColor: "",
    },
    {
      heading: "Refokus",
      subHeading: "Awwwards Honorable Mention",
      image: i4,
      video: v4,
      link: "https://refokus-ui-clone-reactjs.vercel.app/",
      bgColor: "",
    },
  ];

  return (
    <div className="w-full sm:flex items-start justify-center flex-wrap gap-14 sm:my-20 mt-8 mb-5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full sm:w-fit mt-0 relative bg-blue-9000 overflow-hidden ${
            index % 2 !== 0 && "lg:pt-[20rem]"
          }`}
        >
          <a
            href={item.link}
            target="blank"
            className={`bg-[${
              item.bgColor
            }] block rounded-lg xl:w-[39vw] xl:h-[85vh] lg:w-[41vw] lg:h-[80vh] md:w-[100vw] sm:h-[70vh] w-full h-[40vh] overflow-hidden ${
              index % 2 !== 0 && "lg:h-[35rem] lg:w-[25rem]"
            } mt-5 sm:mt-0 relative overflow-hidden `}
          >

            <motion.img
              data-scroll
              data-scroll-speed="-0.2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.5 }}
              className="hidden sm:block sm:absolute z-10 top-0 left-0 w-full h-full object-cover"
              src={item.image}
              alt={item.heading}
            />
            <video
              muted
              loop
              autoPlay
              className="h-full w-full lg:scale-[1.1] md:scale-[2] scale-[1.1]"
              src={item.video}
            ></video>
            
          </a>

          <div className="sm:mt-3 my-2">

            <h3 className="text-[5.2vw] sm:text-[2.9vw] md:text-[2.3vw] lg:text-xl leading-tight overflow-hidden font-bold sm:font-medium capitalize">
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-block origin-left"
              >
                {item.heading}
              </motion.span>
            </h3>

            <h3 className="sm:text-[2.7vw] md:text-[2vw] lg:text-lg overflow-hidden sm:font-light text-zinc-500 capitalize">
              <motion.span
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block origin-left"
              >
                {item.subHeading}
              </motion.span>
            </h3>

          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectContainer;
