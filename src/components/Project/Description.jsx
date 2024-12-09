import { motion } from "framer-motion";
import React from "react";

function Description({ descriptionData }) {
  return (
    <div className="xl:px-20 w-full flex lg:flex-row flex-col items-center justify-between mb-10">
      <div className="lg:w-[80%] w-full lg:min-h-[50vh] md:px-10 sm:mt-0 mt-3">
        <h2 className="font-Poppins xl:text-[1.6vw] lg:text-[1.9vw] md:text-[2.4vw] sm:text-[3.3vw] text-[5vw] leading-none font-light">
          {descriptionData.Title}
        </h2>
        
        <h4 className="font-Poppins xl:text-[1.5vw] lg:text-[1.7vw] md:text-[2.2vw] sm:text-[3vw] text-[4.3vw] text-neutral-500 leading-tight font-extralight">
          {descriptionData.SubTitle}
        </h4>

        <div className="md:my-8 my-5">
          <p className="font-Poppins my-2 leading-tight xl:text-[1.2vw] lg:text-[1.4vw] md:text-[1.7vw] sm:text-[2.2vw] text-[3.9vw] font-extralight">
            {descriptionData.Para1}
          </p>

          <p className="font-Poppins my-2 leading-tight xl:text-[1.2vw] lg:text-[1.4vw] md:text-[1.7vw] sm:text-[2.2vw] text-[3.9vw] font-extralight">
            {descriptionData.Para2}
          </p>

          <p className="font-Poppins my-2 leading-tight xl:text-[1.2vw] lg:text-[1.4vw] md:text-[1.7vw] sm:text-[2.2vw] text-[3.9vw] font-extralight">
            {descriptionData.Para3}
          </p>
        </div>

        <div className="flex items-center justify-start sm:gap-10 gap-4">

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-Poppins xl:text-[0.9vw] lg:text-[1.1vw] md:text-[1.4vw] sm:text-[1.9vw] text-[3.2vw] text-end sm:font-normal font-semibold text-redO"
            href={descriptionData.GitHub}
            target="blank"
          >
            {"< GitHub >"}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-Poppins xl:text-[0.9vw] lg:text-[1.1vw] md:text-[1.4vw] sm:text-[1.9vw] text-[3.2vw] text-end sm:font-normal font-semibold text-redO"
            href={descriptionData.LiveLink}
            target="blank"
          >
            {"< Live Link >"}
          </motion.a>
          
        </div>
      </div>

      <div className="lg:w-[20%] md:px-10 lg:mt-0 mt-2 w-full lg:min-h-[40vh] grid lg:place-content-center place-content-between lg:grid-flow-row grid-flow-col gap-10">
        <div>
          <h4 className="font-Orbitron my-2 leading-none xl:text-[1.6vw] lg:text-[2vw] md:text-[2.6vw] sm:text-[3.2vw] text-[4.3vw] font-extralight text-redO">
            {descriptionData.Year}
          </h4>
        </div>

        <div>
          {descriptionData.Skills.map((elem, index) => (
            <h4
              key={index}
              className="font-Orbitron my-2 leading-none font-thin xl:text-[0.8vw] lg:text-[1vw] md:text-[1.2vw] sm:text-[1.6vw] text-[3vw] tracking-widest"
            >
              {elem}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
