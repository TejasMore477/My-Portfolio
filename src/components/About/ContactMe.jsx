import { motion } from 'framer-motion'
import React from 'react'

function ContactMe({paddingY = 10, text = "< Contact Me >", textPosition = "end" , width="full"}) {
  return (
    <div className={`w-${width} text-${textPosition}`}>
        <motion.button 
          whileHover={{ scale: 1.1}}
          transition={{ type: "spring", stiffness: 300 }}
        className={`font-Poppins text-xs py-${paddingY} text-end text-redO`}>{text}</motion.button>
    </div>
  )
}

export default ContactMe