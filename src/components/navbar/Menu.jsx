import React from 'react'

function Menu({handelMenu,text="Menu"}) {
  return (
    <button onClick={handelMenu} type='button' className='text-xs font-Poppins'>{text}</button>
  )
}

export default Menu