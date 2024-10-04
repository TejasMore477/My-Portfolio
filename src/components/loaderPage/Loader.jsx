import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { easeInOut } from 'framer-motion';

function Loader({setLoaderAnime, loaderAnime}) {
  const textVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
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
    className="w-full h-screen bg-zinc-900 text-white font-Poppins grid place-content-center absolute z-30"
    initial={{y:0, opacity:1}}
    animate={ loaderAnime && {y:"-200%"} }
    transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
    >
      <div className="flex items-center w-full relative">
        <h2 className="text-4xl font-light px-4 leading-none">
          Tejas Madhukar More
        </h2>

        <motion.button
          type="button"
          onClick={() => (setLoaderAnime(prev => !prev ))}
          className="h-12 w-12 border-solid border-[2px] border-redO rounded-full grid place-content-center"
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

        <h2 className="text-4xl font-light px-4 leading-none">
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

        <div className="absolute bottom-[-35%] right-5 ">
          <p className="text-xs font-extralight tracking-wider leading-none">
            Click arrow to open
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
