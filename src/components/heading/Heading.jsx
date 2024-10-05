import React from 'react'

function Heading({heading}) {
  return (
    <div className='w-full h-28 flex flex-col items-start justify-end bg-zinc-950'>
        <h1 className='text-5xl font-Poppins font-bold leading-none tracking-tight pb-3'>{heading}</h1>
    </div>
  )
}

export default Heading