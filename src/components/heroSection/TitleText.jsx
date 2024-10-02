import React from 'react'
import { easeInOut, motion } from 'framer-motion'

function TitleText() {
  return (
    <div className='overflow-hidden h-[35vh]'>
        <motion.h1 
        className='font-Poppins text-[19rem] font-semibold leading-none tracking-[-2rem]'
        initial={{y:"100%"}}
        animate={{y:0}}
        transition={{duration:1.2, ease:easeInOut, delay:0.6}}
        >
            TMMORE
        </motion.h1>
    </div>
  )
}

export default TitleText