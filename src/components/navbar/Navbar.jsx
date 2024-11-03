import React, { useState } from 'react'
import Menu from './Menu'

function Navbar({handelMenu}) {

  return (
    <div className=' h-20 w-full flex items-center justify-between px-20 fixed top-0 left-0 z-20'>
        <p className='text-2xl font-Poppins text-redO font-bold leading-none tracking-tighter'>TMMORE</p>
        <Menu handelMenu={handelMenu}/>
    </div>
  )
}

export default Navbar