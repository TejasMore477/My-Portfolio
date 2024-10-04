import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MenuPage from './components/menupage/MenuPage'
import Landing from './components/heroSection/Landing'

function Mother({loaderAnime }) {

  const [showMenu, setShowMenu] = useState(false)
  const handelMenu = () => {
      setShowMenu(prev => !prev)
  }
  console.log(showMenu)

  

  return (
  <>

    <div className='bg-zinc-950 h-screen w-full text-white overflow-hidden'>
      <Navbar handelMenu={handelMenu}/>
      <MenuPage showMenu={showMenu} setShowMenu={setShowMenu} handelMenu={handelMenu}/>
      <Landing loaderAnime={loaderAnime} />
    </div>
    <div className='h-screen w-full bg-green-700'>
    </div>
    <div className='h-screen w-full bg-white'></div>
  </>
  )
}

export default Mother