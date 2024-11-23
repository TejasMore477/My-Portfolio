import React from 'react'

function ContactMe({paddingY = 10, text = "< Contact Me >", textPosition = "end" , width="full"}) {
  return (
    <div className={`w-${width} text-${textPosition}`}>
        <button className={`font-Poppins text-sm py-${paddingY} text-end text-redO`}>{text}</button>
    </div>
  )
}

export default ContactMe