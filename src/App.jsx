import React, { useEffect, useState } from 'react'
import Mother from './Mother'
import Cursor from './components/Cursor/Cursor'

function App() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0,
  })
  
  console.log(mousePosition)
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
    <div>
      <Cursor mousePosition={mousePosition} setMousePosition={setMousePosition}/>
      <Mother/>
    </div>
  )
}

export default App