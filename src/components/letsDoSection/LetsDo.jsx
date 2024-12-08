import React from "react";
import ContactMe from "../About/ContactMe";
import { motion } from "framer-motion";
import { Tilt } from "@jdion/tilt-react";

function LetsDo() {
  return (
    <div className="w-full md:h-screen md:py-20 sm:py-12 py-8  xl:px-[4.5rem] sm:px-[2vw] px-5 bg-neutral-950 text-center relative flex flex-col items-center rounded-t-2xl">
      <div className="md:h-[35vh] w-full md:mb-3 sm:mb-10 mb-5 font-semibold font-Poppins">
        <h2 className="xl:text-[9.5vw] lg:text-[11vw] md:text-[12vw] sm:text-[12vw] text-[15vw] text-redO lg:leading-[6vw] sm:leading-[9vw] leading-[12vw] tracking-tighter">
          Collaborate,
        </h2>

        <div className="overflow-hidden xl:h-[12vh] lg:h-[5rem] sm:h-[9vh]">
          <motion.h2
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="xl:text-[9.5vw] lg:text-[11vw] md:text-[12vw] sm:text-[12vw] text-[15vw] lg:leading-[6vw] md:leading-[6vw] sm:leading-[8vw] leading-[12vw] tracking-tighter"
          >
            Innovate,
          </motion.h2>
        </div>

        <h2 className="xl:text-[9.5vw] lg:text-[11vw] md:text-[12vw] sm:text-[12vw] text-[15vw] text-redO sm:leading-[6vw] leading-[12vw] tracking-tighter">
          Elevate!
        </h2>
      </div>

      <div className="lg:h-[50vh] md:h-[50vh] lg:w-[75vw] sm:w-[90vw] flex md:flex-row flex-col items-center md:justify-end sm:justify-between md:relative sm:static lg:gap-20 md:gap-16 gap-6">
        <Tilt className="xl:w-[19rem] lg:w-[26rem] md:w-[31rem] sm:w-[37vw] md:h-full sm:h-[37vh] w-[13rem] h-[15rem] bg-zinc-800 bg-opacity-10 backdrop-blur-sm rounded-lg flex items-center justify-center relative xl:-top-10 lg:-top-5 xl:left-10 lg:left-5 md:left-12">
          <img
            src="src/assets/images/profile/lance-reis-TTdJV-K1IUg-unsplash.jpg"
            alt="My Image"
            className="opacity-20 scale-[1] absolute w-[95%] h-[95%] object-cover object-center rounded-md shadow-lg shadow-zinc-950"
          />
          <img
            src="src/assets/images/profile/lance-reis-TTdJV-K1IUg-unsplash.jpg"
            alt="My Image"
            className="opacity-60 scale-[0.96] absolute w-[95%] h-[95%] object-cover object-center rounded-md shadow-lg shadow-zinc-950 "
          />

          <img
            src="src/assets/images/profile/lance-reis-TTdJV-K1IUg-unsplash.jpg"
            alt="My Image"
            className="opacity-80 scale-[0.85] absolute w-[95%] h-[95%] object-cover object-center rounded-md shadow-lg shadow-zinc-950 "
          />
        </Tilt>

        <div className="lg:w-[38rem] md:w-[50rem] md:text-start bg-zinc-8000 sm:px-0 px-3">
          <div className="overflow-hidden xl:h-16">
            <motion.h2
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="xl:text-[1.7vw] lg:text-[1.8vw] md:text-[2.2vw] sm:text-[3vw] text-[5.2vw] leading-none font-light pb-4"
            >
              I'd be excited for a collaboration opportunity in your next
              venture.
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="xl:text-[1.2vw] lg:text-[1.4vw] md:text-[1.8vw] sm:text-[2.2vw] text-[4vw] leading-none font-extralight pb-4 text-zinc-300"
            >
              Bring your vision into the world and watch it make a difference!
            </motion.h3>
          </div>

          <div className="overflow-hidden sm:h-6">
            <motion.h2
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="xl:text-[1.7vw] lg:text-[1.8vw] md:text-[2.2vw] sm:text-[3vw] text-[5.2vw] leading-none font-light"
            >
              Reach out and let's set up a chat.
            </motion.h2>
          </div>

          <div className="md:pt-0 pt-5 w-full md:hidden">
            <ContactMe paddingY={2} textPosition={"center"} />
          </div>
          <div className="md:block hidden">
          <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsDo;
