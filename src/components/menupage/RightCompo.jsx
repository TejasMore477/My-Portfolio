import React from 'react'

function RightCompo() {
  return (
    <div className='w-full flex flex-col items-end py-10 gap-2'>
    {
        ["home","Projects", "About","Resume"].map((items, index)=>(
            <button key={index} type='button' className='text-[3.5rem] uppercase font-Poppins leading-none tracking-tight font-semibold'>{items}</button>
        ))
    }
    </div>
  )
}

export default RightCompo