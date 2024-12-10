import React from "react";
import ContactMe from "./ContactMe";
import LocalTime from "../dateTime/LocalTime";
import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
import myImage from "/src/assets/images/profile/20241010_124829-02.jpeg";

function About() {
  return (
    <div className="w-full lg:h-screen bg-neutral-950 xl:px-[4.5rem] sm:px-[2vw] px-5 sm:py-16 py-10 grid place-content-center rounded-b-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="w-full h-full flex lg:flex-row flex-col items-center lg:justify-center justify-between gap-5 pt-5">
          <motion.div
            className="lg:w-1/4 sm:w-fit w-[95%] bg-zinc-800 bg-opacity-10 backdrop-blur-sm rounded-lg z-20 flex items-center lg:gap-5 gap-3 flex-col lg:py-10 sm:py-5 pt-6 lg:px-0 sm:px-5 px-5"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hidden sm:block">
            <Tilt className="xl:h-72 xl:w-72 sm:h-64 sm:w-64  grid place-content-center overflow-hidden relative">
              <img
                className="opacity-20 scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:h-64 lg:h-56 sm:h-64 xl:w-64 lg:w-56 sm:w-64 object-cover object-center rounded-md"
                src={myImage}
                alt="MyImage"
              />
              <img
                className="opacity-60 scale-[0.96] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:h-64 lg:h-56 sm:h-64 xl:w-64 lg:w-56 sm:w-64 object-cover object-center rounded-md"
                src={myImage}
                alt="MyImage"
              />
              <img
                className="opacity-80 scale-[0.85] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:h-64 lg:h-56 sm:h-64 xl:w-64 lg:w-56 sm:w-64 object-cover object-center rounded-md"
                src={myImage}
                alt="MyImage"
              />
            </Tilt>
            </div>

            <div className="h-full w-full sm:hidden">
            <div className="sm:h-72 sm:w-72 h-[35vh] w-full grid place-content-center overflow-hidden relative">
              <img
                className="opacity-20 scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[90%] object-cover object-center rounded-md"
                src={myImage}
                alt="MyImage"
              />
              <img
                className="opacity-50 scale-[0.96] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[90%] object-cover object-center rounded-md"
                src={myImage}
                alt="MyImage"
              />
              <img
                className="opacity-90 scale-[0.85] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[90%] object-cover object-center rounded-md"
                src={myImage}
                alt="MyImage"
              />
            </div>
            </div>

            <div className="font-poppins xl:w-[75%] lg:w-[80%] w-full text-center lg:text-start">
              <h2 className="leading-tight xl:text-[1vw] lg:text-[1.2vw] md:text-[1.5vw] sm:text-[2vw] text-[3.9vw]">
                Blood@ <span className="text-redO">A+</span>
              </h2>
              <h2 className="leading-tight xl:text-[1vw] lg:text-[1.2vw] md:text-[1.5vw] sm:text-[2vw] text-[3.9vw] xl:pb-0 sm:pb-10 pb-5">
                Open for work and collaborations.
              </h2>
              <div className="w-full sm:flex items-center lg:justify-start sm:justify-center hidden">
                <LocalTime pos={"start"} pos2={"center"} about={true} paddingtop={0} />
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 h-full relative lg:px-3 lg:py-5">
            <h3 className="w-full font-Poppins xl:text-[1.3vw] lg:text-[1.6vw] md:text-[1.9vw] sm:text-[2.5vw] text-[4.3vw] leading-tight font-light py-5">
              I am <a className="text-redO font-Poppins">Tejas Madhukar More</a>
              , a 3rd-year student and a creative web developer from
              Maharashtra, India. I love building interactive websites that
              blend design and functionality seamlessly.
            </h3>

            <div className="flex items-start justify-between gap-5">
              <h3 className="w-1/2 font-Poppins leading-tight xl:text-[1.1vw] lg:text-[1.3vw] md:text-[1.7vw] sm:text-[2vw] text-[3.9vw] font-extralight py-4">
                I’m still early in my journey and haven’t had the chance to work
                with many companies yet, but I’m really excited to find
                opportunities where my creativity and skills are appreciated.
              </h3>

              <h3 className="w-1/2 font-Poppins leading-tight xl:text-[1.1vw] lg:text-[1.3vw] md:text-[1.7vw] sm:text-[2vw] text-[3.9vw] font-extralight py-4">
                I’m always learning and growing, and I’d love to work with a
                team that values my work and helps me grow along the way.
              </h3>
            </div>

            <p className="w-full font-Poppins xl:text-[1.3vw] lg:text-[1.6vw] md:text-[1.9vw] sm:text-[2.5vw] text-[4.3vw] leading-tight font-light py-5">
              I've been interested in design and creativity since I was young.
              What started as a hobby, learning from YouTube, soon became a real
              passion. I improved my skills at{" "}
              <a className="text-redO font-Poppins">Sheryians Coding School</a>,
              where the{" "}
              <a className="text-redO font-Poppins">Frontend Domination</a>{" "}
              course helped boost both my creativity and problem-solving. For
              me, design is all about tackling challenges with bold ideas and
              clear communication. Over time, I've explored different areas,
              from UI/UX and illustrations to product design, branding, and art
              direction. Every project I work on is a chance to blend creativity
              with practical solutions.
            </p>

            <ContactMe paddingY={0} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
