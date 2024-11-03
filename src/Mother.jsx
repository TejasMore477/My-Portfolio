import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MenuPage from './components/menupage/MenuPage'
import Landing from './components/heroSection/Landing'
import LetsDo from './components/letsDoSection/LetsDo'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import Reel from './components/reel/Reel'

function Mother({loaderAnime }) {

  const [showMenu, setShowMenu] = useState(false)
  const handelMenu = () => {
      setShowMenu(prev => !prev)
  }

  return (
  <>
    <div className='bg-black min-h-screen w-full text-white overflow-hidden px-[0.5rem]'>
      <Navbar handelMenu={handelMenu}/>
      <MenuPage showMenu={showMenu} setShowMenu={setShowMenu} handelMenu={handelMenu}/>
      <Landing loaderAnime={loaderAnime} />
      <Reel/>
      <LetsDo/>
      {/* <About/> */}
    </div>
    <div className='bg-black min-h-screen w-full text-white overflow-hidden px-[0.5rem]'>
      <Footer/>
    </div>
  </>
  )
}

export default Mother