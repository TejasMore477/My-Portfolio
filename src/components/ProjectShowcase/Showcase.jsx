import React from 'react'
import ProjectContainer from './ProjectContainer'
import Border from '../heroSection/Border'
import ContactMe from '../About/ContactMe'

function Showcase() {
  return (
    <div className='min-h-screen py-20 my-5 w-full bg-neutral-950 px-20 rounded-2xl capitalize'>
        <div className='font-Poppins '>
        <h1 className="text-[5rem] capitalize font-semibold pb-10">featured project</h1>
        <p className='text-xs font-Orbitron font-light tracking-[0.2rem]'>I love to create websites</p>
        <Border marginY={1}/>
        <p className='text-xs font-Orbitron font-light tracking-[0.2rem]'>and i enjoy creating them</p>
        </div>
        <ProjectContainer/>
        <div className='flex items-center justify-center'>
        <ContactMe text="< View All Projects >" textPosition='center'/>
        </div>
    </div>
  )
}

export default Showcase