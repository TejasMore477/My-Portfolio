import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { easeInOut } from "framer-motion";
import ganpatiBappa from "/src/assets/images/ganpatiBappa.png";

function Loader({ setLoaderAnime, loaderAnime }) {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const text = "Developer";
  const [changeText, setChangeText] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeText((prev) =>
        prev === "Developer" ? "Designer" : "Developer"
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full h-screen overflow-hidden bg-zinc-900 sm:bg-yellow-900 md:bg-orange-800 lg:bg-lime-900 xl:bg-sky-950 text-white font-Poppins grid place-content-center absolute z-30"
      initial={{ y: 0, opacity: 1 }}
      animate={loaderAnime && { y: "-200%" }}
      transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
    >
      <div className="md:flex items-center px-5 sm:px-0 w-full relative">
        <img className=" md:size-[4.5rem] lg:size-20 sm:size-[12vw] size-[20vw]" src={ganpatiBappa} alt="Shri Ganesha" />

        <h2 className="lg:text-4xl md:w-full w-[90%] md:text-[2.9vw] sm:text-[5vw] text-3xl font-light px-4 leading-none">
          Tejas Madhukar More
        </h2>

        <motion.button
          type="button"
          onClick={() => setLoaderAnime((prev) => !prev)}
          className="w-14 h-14 sm:w-12 sm:h-12 bottom-[2.2rem] left-[2rem] sm:static absolute sm:ml-[10vw] ml-[6rem] md:ml-0 border-solid border-[2px] border-redO rounded-full grid place-content-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <motion.span
            className="font-extrabold text-[1.2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <BsArrowUpRight />
          </motion.span>
        </motion.button>

        <h2 className="lg:text-4xl text-3xl md:text-[2.9vw] sm:text-[5vw] sm:pl-[17vw] md:pl-[1.2vw] font-light px-4  sm:leading-none mt-7 sm:mt-0">
          Web
          <motion.div
            className="inline-block ml-3 w-[12rem]"
            initial="hidden"
            animate="visible"
            exit="exit"
            key={changeText} // ensures animation occurs on each text change
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            {changeText}
          </motion.div>
        </h2>

        <div className="absolute bottom-[-10%] lg:right-5 right-10 md:right-[8vw]">
          <p className="lg:text-xs md:text-[1.3vw] text-xs font-extralight tracking-wider leading-none">
            Click arrow to open
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
