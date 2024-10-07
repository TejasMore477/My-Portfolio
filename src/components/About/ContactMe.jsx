import React from 'react'

function ContactMe({paddingY = 10}) {
      const Contact = "< Contact Me >"
  return (
    <div className='w-full text-end'>
        <button className={`font-Poppins text-sm py-${paddingY} text-end text-redO`}>{Contact}</button>
    </div>
  )
}

export default ContactMe