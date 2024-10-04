import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from "react-icons/bs";

function Circle({loaderAnime}) {
  return (
    <motion.div 
      className='size-[13rem] rounded-full bg-redO grid place-content-center ' 
      initial={{ scale: 0 }} 
      animate={ loaderAnime && { scale: 1 }}  
      transition={{ delay: 1, duration: 1, ease: [0.5, 1, 0.89, 1] }}
    >
        <span className='font-bold text-[6rem]'><BsArrowUpRight /></span> 
    </motion.div>
  );
}

export default Circle;
