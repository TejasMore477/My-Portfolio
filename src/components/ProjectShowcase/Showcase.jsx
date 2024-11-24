import React from "react";
import ProjectContainer from "./ProjectContainer";
import Border from "../heroSection/Border";
import { motion } from "framer-motion";

function Showcase() {
  return (
    <div className="min-h-screen py-10 my-5 w-full bg-neutral-950 px-20 rounded-2xl capitalize">
      <div className="font-Poppins ">
        <div className="h-36 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.5, 1, 0.89, 1] }}
            className="text-[5rem] capitalize font-semibold pb-10"
          >
            featured project
          </motion.h1>
        </div>

        <p className="text-xs font-Orbitron font-light tracking-[0.2rem]">
          I love to create websites
        </p>

        <Border marginY={1} />

        <p className="text-xs font-Orbitron font-light tracking-[0.2rem]">
          and i enjoy creating them
        </p>
      </div>

      <ProjectContainer />

      <div className="flex items-center justify-center">
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-Poppins text-sm text-end text-redO"
          href=""
        >
          {"< View All Projects >"}
        </motion.a>
      </div>
    </div>
  );
}

export default Showcase;
