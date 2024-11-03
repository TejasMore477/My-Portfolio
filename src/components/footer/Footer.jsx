import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import RightCompo from '../menupage/RightCompo';
import LinksComp from '../menupage/LinksComp';
import Border from '../heroSection/Border';

function Footer() {
  return (
    <div className='w-full h-screen pt-8 bg-neutral-950 '>
        <div className='w-full h-full flex flex-col justify-between pt-10 items-start px-[4.5rem] rounded-t-2xl bg-black'>
            <div className='w-full flex flex-col items-end justify-between -slate-900'>
                <RightCompo footer={true}/>
                <div className='w-1/2 mb-8'>
                    <LinksComp/>
                </div>
                <Border/>
                <p className='text-sm tracking-wider font-thin text-redO text-right mt-4'>Wanna Play some Cool games ?  <br /> try turning off your internate connection while surfing through my site!</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <div className='overflow-hidden h-[35vh]'>
                    <h1 className='font-Poppins text-[19rem] font-semibold leading-none tracking-[-2rem]'>TMMORE</h1>
                </div>
                <div className='size-[13rem] rounded-full bg-redO grid place-content-center ' >
                    <span className='font-bold text-[6rem]'><BsArrowUpRight /></span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer