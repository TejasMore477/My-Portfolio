import React from "react";
import { motion } from "framer-motion";

function PageNotFound() {
  return (
    <div className="w-full h-screen text-white bg-black overflow-hidden font-Poppins flex flex-col items-center justify-center">

      <motion.p
        className="text-redO text-xs font-Orbitron leading-none tracking-[1rem] pl-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OOPS!
      </motion.p>

      <motion.h1
        className="font-Orbitron text-[13rem] font-semibold tracking-tight leading-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-sm font-extralight capitalize"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        the page you are looking for - doesn't exist.
      </motion.p>

      <motion.h3
        className="capitalize font-normal"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Why don't you try one of these pages instead?
      </motion.h3>

      <motion.div
        className="flex items-center justify-center gap-20 mt-10 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-redO text-sm capitalize"
        >
          {'< Home >'}
        </motion.a>
        
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-redO text-sm capitalize"
        >
          {'< Projects >'}
        </motion.a>
      </motion.div>
    </div>
  );
}

export default PageNotFound;
