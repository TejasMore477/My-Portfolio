import React from "react";
import { easeInOut, motion } from "framer-motion";
// 19rem
function TitleText({ loaderAnime }) {
  return (
    <div className="overflow-hidden xl:h-[35vh]">
      <motion.h1
        className="font-Poppins xl:text-[20vw] sm:text-[21vw] text-[24.3vw] font-semibold leading-none -tracking-wider sm:tracking-[-2.5vw] xl:tracking-[-2rem]"
        initial={{ y: "100%" }}
        animate={loaderAnime && { y: 0 }}
        transition={{ duration: 1.2, ease: easeInOut, delay: 0.6 }}
      >
        TMMORE
      </motion.h1>
    </div>
  );
}

export default TitleText;
