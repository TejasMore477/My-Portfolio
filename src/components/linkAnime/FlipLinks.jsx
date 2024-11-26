import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const DURATION = 0.25;
const STAGGER = 0.025;


const FlipLinks = ({ children, href }) => {
    return (
      <NavLink to={href}         
      className={(e) =>
        `${e.isActive ? "text-redO" : "text-white"} relative block overflow-hidden whitespace-nowrap text-[3.5rem] uppercase font-Poppins leading-none tracking-tight font-semibold transition ease-in-out duration-150`
      }>
              <motion.span
        initial="initial"
        whileHover="hovered"
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.span>
      </NavLink>
    );
  };

export default FlipLinks


