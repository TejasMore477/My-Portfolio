import React from 'react';
import { motion } from 'framer-motion';

function Circle() {
  return (
    <motion.div 
      className='size-[13rem] rounded-full bg-redO inline-block' 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }}  
      transition={{ delay: 1, duration: 1, ease: [0.5, 1, 0.89, 1] }} 
    />
  );
}

export default Circle;
