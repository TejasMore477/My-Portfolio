import React, { useEffect, useState } from 'react'
import Mother from './Mother'
import Cursor from './components/Cursor/Cursor'
import Loader from './components/loaderPage/Loader'

function App() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0,
  })

  const [loaderAnime, setLoaderAnime] = useState(false)
  
  console.log(loaderAnime)
  useEffect(()=>{
    const mouseMove  = (e)=>{
      console.log(e);
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return (
      window.removeEventListener('mouseleave', mouseMove)
    )
  },[])
  
  return (
    <div className={`${loaderAnime? 'overflow-y-auto h-screen w-full':'overflow-y-hidden h-screen w-full'}`}>
      <Cursor mousePosition={mousePosition} setMousePosition={setMousePosition}/>
      <Loader loaderAnime={loaderAnime} setLoaderAnime={setLoaderAnime}/>
      <Mother loaderAnime={loaderAnime} />
    </div>
  )
}

export default App