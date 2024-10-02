import React from 'react';
import Menu from '../navbar/Menu';
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import RightCompo from './RightCompo';
import { button } from 'framer-motion/client';

function MenuPage({ showMenu, setShowMenu, handelMenu }) {
  return (
    <motion.div
      className="w-1/2 h-[70vh] bg-transperant fixed top-[8px] right-[8px] rounded-3xl overflow-hidden z-50"
      initial={{ y: -800 }}  
      animate={showMenu ? { y: 0 } : { y: -800 }} 
      transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
    >
        <div className='bg-zinc-800 bg-opacity-10 backdrop-blur-sm py-[1.4rem] px-[4.5rem] rounded-3xl'>
        <div className="w-full flex items-center justify-end ">
            <Menu text="Close" showMenu={showMenu} setShowMenu={setShowMenu} handelMenu={handelMenu} />
        </div>

            <RightCompo/>
        <div className='w-full flex items-center justify-between '>
            {["LinkedIn", "GitHub", "Instagram", "Frontend Mentor", "LeetCode"].map((links, index)=>(
                <button key={index} type='button' className='font-Poppins text-sm font-extralight'>{links}</button>
            ))}
        </div>

        </div>
        <div className='py-10 px-[4.5rem]'>
        <p className='text-end font-Orbitron text-xs tracking-widest leading-none py-1'>tejasmore660@gmail.com</p>
        <p className='text-end font-Orbitron text-xs tracking-widest leading-none py-1'>Maharashtra, India</p>
        <p className='text-end font-Orbitron text-xs tracking-widest leading-none py-1'>Monday, sep 30-20-2024</p>
        </div>


    </motion.div>
  );
}

export default MenuPage;
