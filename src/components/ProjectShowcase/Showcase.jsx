import React from "react";
import ProjectContainer from "./ProjectContainer";
import Border from "../heroSection/Border";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Showcase() {
  // min-h-screen py-10 my-5 w-full xl:bg-red-900 lg:bg-green-900 md:bg-fuchsia-900 sm:bg-yellow-800 bg-lime-950 px-20 rounded-2xl capitalize
  return (
    <div className="min-h-screen py-10 my-5 w-full xl:bg-red-900 lg:bg-green-900 md:bg-fuchsia-900 sm:bg-yellow-800 bg-lime-950 xl:px-[4.5rem] sm:px-[2vw] px-5 capitalize">
      <div className="font-Poppins bg-yellow-600">
      {/* h-36 overflow-hidden */}
        <div className="sm:h-36 overflow-hidden bg-yellow-8000">
          <motion.h1
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.5, 1, 0.89, 1] }}
            // text-[5rem] capitalize font-semibold pb-10
            className="sm:text-[5rem] text-[10vw] tracking-tight capitalize font-semibold pb-10"
          >
            featured project
          </motion.h1>
        </div>
        {/* text-xs font-Orbitron font-light tracking-[0.2rem] */}
        <p className="sm:text-xs text-[3vw] font-Orbitron font-light tracking-[0.2rem]">
          I love to create websites
        </p>

        <Border marginY={1} />

        <p className="sm:text-xs text-[3vw] font-Orbitron font-light tracking-[0.2rem]">
          and i enjoy creating them
        </p>
      </div>

      <ProjectContainer />

      {/* flex items-center justify-center */}
      <div className="flex items-center justify-center bg-yellow-600">

      <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}>
      <Link
          // font-Poppins text-sm text-end text-redO
          className="font-Poppins sm:text-sm text-[3.3vw] text-end text-redO"
          to="/projects"
        >
          {"< View All Projects >"}
        </Link>
      </motion.div>
      </div>
    </div>
  );
}

export default Showcase;
