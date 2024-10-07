import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MenuPage from './components/menupage/MenuPage'
import Landing from './components/heroSection/Landing'
import LetsDo from './components/letsDoSection/LetsDo'
import About from './components/About/About'

function Mother({loaderAnime }) {

  const [showMenu, setShowMenu] = useState(false)
  const handelMenu = () => {
      setShowMenu(prev => !prev)
  }

  return (
  <>
    <div className='bg-zinc-950 min-h-screen w-full text-white overflow-hidden'>
      <Navbar handelMenu={handelMenu}/>
      <MenuPage showMenu={showMenu} setShowMenu={setShowMenu} handelMenu={handelMenu}/>
      <Landing loaderAnime={loaderAnime} />
      <LetsDo/>
      <About/>
    </div>
  </>
  )
}

export default Mother