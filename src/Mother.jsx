import React, { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Navbar from './components/navbar/Navbar'
import MenuPage from './components/menupage/MenuPage'
import Landing from './components/heroSection/Landing'
import LetsDo from './components/letsDoSection/LetsDo'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import PlayReel from './components/reel/PlayReel'

function Mother({loaderAnime}) {

  const [showMenu, setShowMenu] = useState(false)
  const handelMenu = () => {
      setShowMenu(prev => !prev)
  }

  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust smoothness (closer to 0 = smoother)
      multiplier: 10 // Adjust scroll speed
    })

    // Cleanup on component unmount
    return () => {
      scroll.destroy()
    }
  }, [])

  return (
  <div ref={scrollRef} data-scroll-container>
    <div className='bg-black min-h-screen w-full text-white overflow-hidden px-[0.5rem]'>
      <Navbar handelMenu={handelMenu}/>
      <MenuPage showMenu={showMenu} setShowMenu={setShowMenu} handelMenu={handelMenu}/>
      <Landing loaderAnime={loaderAnime} />
      <PlayReel/>
      <LetsDo/>
      <About/>
    </div>
    <div className='bg-black min-h-screen w-full text-white overflow-hidden px-[0.5rem]'>
      <Footer/>
    </div>
  </div>
  )
}

export default Mother