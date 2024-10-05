import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MenuPage from './components/menupage/MenuPage'
import Landing from './components/heroSection/Landing'

function Mother({loaderAnime }) {

  const [showMenu, setShowMenu] = useState(false)
  const handelMenu = () => {
      setShowMenu(prev => !prev)
  }
  // console.log(showMenu)

  

  return (
  <>

    <div className='bg-zinc-950 min-h-screen w-full text-white overflow-hidden'>
      <Navbar handelMenu={handelMenu}/>
      <MenuPage showMenu={showMenu} setShowMenu={setShowMenu} handelMenu={handelMenu}/>
      <Landing loaderAnime={loaderAnime} />
    </div>
  </>
  )
}

export default Mother