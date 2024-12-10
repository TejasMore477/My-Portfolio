import { motion } from 'framer-motion'
import React from 'react'

function ContactMe({paddingY = 10, text = "< Contact Me >", textPosition = "end" , width="full"}) {
  return (
    <div className={`w-${width} text-${textPosition}`}>
        <motion.a 
        href='mailto:tejasmore660@gmail.com'
          whileHover={{ scale: 1.1}}
          transition={{ type: "spring", stiffness: 300 }}
        className={`font-Poppins xl:text-[0.9vw] lg:text-[1.1vw] md:text-[1.4vw] sm:text-[1.9vw] text-[3.2vw] py-${paddingY} text-end text-redO`}>{text}</motion.a>
    </div>
  )
}

export default ContactMe