import React from "react";
import ContactMe from "../About/ContactMe";
import { motion } from "framer-motion";
import { Tilt } from "@jdion/tilt-react";

function LetsDo() {
  return (
    <div className="w-full h-screen py-20 px-[4.5rem] bg-neutral-950 text-center relative flex flex-col items-center rounded-t-2xl">
      <div className="h-[35vh] w-full mb-3">
        <h2 className="text-[9rem] font-Poppins font-semibold text-redO leading-[5rem] tracking-tighter">
          Collaborate,
        </h2>
        <div className="overflow-hidden h-[5.7rem]">
          <motion.h2
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="text-[9rem] font-Poppins font-semibold leading-[5rem] tracking-tighter"
          >
            Innovate,
          </motion.h2>
        </div>
        <h2 className="text-[9rem] font-Poppins font-semibold text-redO leading-[4rem] tracking-tighter">
          Elevate!
        </h2>
      </div>

      <div className="h-[50vh] w-[75%] flex items-center justify-end relative gap-20">
        <Tilt className="w-[19rem] h-full bg-zinc-800 bg-opacity-10 backdrop-blur-sm rounded-lg flex items-center justify-center i relative -top-10 left-10">
            <img
              src="src/assets/images/profile/lance-reis-TTdJV-K1IUg-unsplash.jpg"
              alt="My Image"
              className="opacity-20 scale-[1] absolute w-[95%] h-[95%] object-cover object-center rounded-md shadow-lg shadow-zinc-950 "
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
        <div className="w-[38rem] text-start">
          <div className="overflow-hidden h-16">
            <motion.h2
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="font-Poppins text-2xl leading-none font-light pb-4"
            >
              I'd be excited for a collaboration opportunity in your next
              venture.
            </motion.h2>
          </div>
          <div className="bg-fuchsia-00 overflow-hidden h">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="font-Poppins text-sm leading-none font-extralight pb-4 text-zinc-300"
            >
              Bring your vision into the world and watch it make a difference!
            </motion.h3>
          </div>
          <div className="overflow-hidden h-6">
            <motion.h2
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.5, 1, 0.89, 1],
              }}
              className="font-Poppins text-2xl leading-none font-light"
            >
              Reach out and let's set up a chat.
            </motion.h2>
          </div>

          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default LetsDo;
