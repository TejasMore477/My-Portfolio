import React from "react";
import ProjectContainer from "./ProjectContainer";
import Border from "../heroSection/Border";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Showcase() {
  return (
    <div className="min-h-screen py-10 my-5 md:mt-0 w-full xl:px-[4.5rem] sm:px-[2vw] px-5 capitalize">
      <div className="font-Poppins bg-yellow-6000">
        <div className="xl:h-28 lg:h-24 sm:h-20 overflow-hidden xl:mb-0 sm:mb-5 mb-0">
          <motion.h1
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.5, 1, 0.89, 1] }}
            className="xl:text-[5vw] lg:text-[5.6vw] sm:text-[7vw] text-[10.5vw] tracking-tight capitalize font-semibold sm:pb-10 pb-5"
          >
            featured project
          </motion.h1>
        </div>

        <p className="lg:text-[0.8vw] md:text-[1vw] sm:text-[1.3vw] text-[2.5vw] bg-transparent  font-Orbitron font-light tracking-[0.2rem]">
          I love to create websites
        </p>

        <Border marginY={1} />

        <p className="lg:text-[0.8vw] md:text-[1vw] sm:text-[1.3vw] text-[2.5vw] bg-transparent  font-Orbitron font-light tracking-[0.2rem]">
          and i enjoy creating them
        </p>
      </div>

      <ProjectContainer />

      <div className="flex items-center justify-center bg-yellow-60 sm:pt-0 pt-5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
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
