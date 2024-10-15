import React from 'react';
import Menu from '../navbar/Menu';
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import RightCompo from './RightCompo';
import LocalTime from '../dateTime/LocalTime';

function MenuPage({ showMenu, setShowMenu, handelMenu }) {
  return (
    <motion.div
      className="w-1/2 h-[70vh] bg-transperant fixed top-[8px] right-[8px] rounded-3xl overflow-hidden z-50"
      initial={{ y: -800 }}  
      animate={showMenu ? { y: 0 } : { y: -800 }} 
      transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
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
        <LocalTime/>


    </motion.div>
  );
}

export default MenuPage;
