import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function OverlayCopy({ subheading, heading }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center xl:text-[1.3vw] lg:text-[1.6vw] md:text-[2.1vw] sm:text-[2.6vw] text-[4.5vw] md:mb-4 ">
        {subheading}
      </p>
      <p className="text-center xl:text-[4vw] lg:text-[5vw] md:text-[6vw] sm:text-[6vw] text-[8vw] font-bold leading-tight ">
        {heading}
      </p>
    </motion.div>
  );
}

export default OverlayCopy;
