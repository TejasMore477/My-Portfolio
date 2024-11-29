import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

function Circle({ loaderAnime }) {
  return (
    <motion.div
      className="xl:size-[15vw] lg:size-[18vw] sm:size-[17vw] hidden rounded-full bg-redO sm:grid place-content-center "
      initial={{ scale: 0 }}
      animate={loaderAnime && { scale: 1 }}
      transition={{ delay: 1, duration: 1, ease: [0.5, 1, 0.89, 1] }}
    >
      <span className="font-bold xl:text-[6rem] sm:text-[8vw]">
        <BsArrowUpRight />
      </span>
    </motion.div>
  );
}

export default Circle;
