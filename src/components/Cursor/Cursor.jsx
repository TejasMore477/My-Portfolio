import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor({ mousePosition }) {
  const [cursorVariant, setCursorVariant] = useState("default");

  // for cursor states
  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1,
      transition: {
        duration:0.1,
      },
    },
    hover: {
      scale: 1.5,
      backgroundColor: "#ff6b6b",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
      },
    },
    click: {
      scale: 2,
      backgroundColor: "#6bffb4",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        duration: 0.2,
      },
    },
  };

  const handleClick = () => {
    setCursorVariant("click");
    setTimeout(() => setCursorVariant("default"), 200); 
  };

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // elements which triggers the hover effect
    const interactiveElements = document.querySelectorAll('a, button, Link');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('click', handleClick); 

    return () => {
      // Cleanup hover and click 
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <motion.div
        className="w-16 h-16 bg-white opacity-[0.28] rounded-full fixed z-40 pointer-events-none grid place-content-center"
        variants={variants}
        animate={cursorVariant}
        style={{ x: mousePosition.x - 32, y: mousePosition.y - 32 }}
      >
        <div className='bg-zinc-950 w-1 h-1 rounded-full'></div>
      </motion.div>
    </>
  );
}

export default Cursor;
