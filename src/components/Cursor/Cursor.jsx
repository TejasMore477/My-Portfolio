import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

function Cursor({ mousePosition, setMousePosition }) {
  const [cursorVariant, setCursorVariant] = useState("default");

  // Cursor animation variants
  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1,
      transition: { duration: 0.1 },
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

  // Handle click event
  const handleClick = useCallback(() => {
    setCursorVariant("click");
    setTimeout(() => setCursorVariant("default"), 200);
  }, []);

  // Handle mouse position update
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // Elements triggering the hover effect
    const interactiveElements = document.querySelectorAll("a, button, Link , NavLink");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    // Cleanup event listeners
    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div className="hidden md:block">
          <motion.div
      className="w-16 h-16 bg-white opacity-[0.28] rounded-full fixed z-40 pointer-events-none grid place-content-center"
      variants={variants}
      animate={cursorVariant}
      style={{ x: mousePosition.x - 32, y: mousePosition.y - 32 }}
    >
      <div className="bg-zinc-950 w-1 h-1 rounded-full"></div>
    </motion.div>
    </div>
  );
}

export default Cursor;
