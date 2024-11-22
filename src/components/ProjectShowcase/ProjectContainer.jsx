import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

import i1 from "/src/assets/images/projects/i1.webp";
import i2 from "/src/assets/images/projects/i2.webp";
import i3 from "/src/assets/images/projects/i3.webp";
import i4 from "/src/assets/images/projects/i4.webp";
import v1 from "/src/assets/videos/project/v1.mp4";
import v2 from "/src/assets/videos/project/v2.mp4";
import v3 from "/src/assets/videos/project/v3.mp4";
import v4 from "/src/assets/videos/project/v4.mp4";

function ProjectContainer() {
  const data = [
    {
      heading: "Amaterasu",
      subHeading: "Frontier Health Innovation",
      image: i1,
      video: v1,
      link: "https://tejasmore477.github.io/Minor-project-4-Obays-Agency-Clone/",
    },
    {
      heading: "Columbia Pictures",
      subHeading: "Celebrating a Century of Cinema",
      image: i2,
      video: v2,
      link: "https://tejasmore477.github.io/Minor-Project-5-Ochi-UI-React/",
    },
    {
      heading: "Cambium",
      subHeading: "Pioneering Sustainable Solutions",
      image: i3,
      video: v3,
      link: "https://arock-portfolio.vercel.app/",
    },
    {
      heading: "Studio D",
      subHeading: "Urban and Landscape Design",
      image: i4,
      video: v4,
      link: "https://refokus-ui-clone-reactjs.vercel.app/",
    },
  ];

  return (
    <div className="sm:flex items-start justify-center flex-wrap gap-20 my-20">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full sm:w-fit mt-10 sm:mt-0 relative ${
            index % 2 !== 0 && "sm:pt-[20rem]"
          }`}
        >
          <a
            href={item.link}
            target="blank"
            className={` block rounded-lg sm:w-[38rem] overflow-hidden w-full h-96 sm:h-[45rem] ${
              index % 2 !== 0 && "sm:h-[35rem] sm:w-[25rem]"
            } mt-10 sm:mt-0 relative overflow-hidden`}
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
              className="h-full w-full scale-[1.1]"
              src={item.video}
            ></video>
          </a>

          <div className="mt-3">
            <h3 className="text-sm sm:text-xl font-bold sm:font-medium">
              <span className="inline-block origin-left">{item.heading}</span>
            </h3>
            <h3 className="text-sm sm:text-lg sm:font-light text-zinc-500">
              <span className="inline-block origin-left">
                {item.subHeading}
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectContainer;
