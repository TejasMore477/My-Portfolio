import React from 'react';

function RightCompo({ footer = false }) {

  const elements = ["home", "Projects", "About", "Resume"];

  const filFunction = () => {
    return elements.filter((elem, index) => index > 0);
  }; 
  const displayElements = footer ? filFunction() : elements;

  return (
    <div className='w-full flex flex-col items-end py-10 gap-2'>
      {
        displayElements.map((item, index) => (
          <button
            key={index}
            type='button'
            className='text-[3.5rem] uppercase font-Poppins leading-none tracking-tight font-semibold'
          >
            {item}
          </button>
        ))
      }
    </div>
  );
}

export default RightCompo;

// import React from 'react'

// function RightCompo({footer=false}) {
//   const elements = ["home","Projects", "About","Resume"]

//   const filFunction = () => {
//     elements.filter((elem, index) => index > 0);
//     return <h1>{elem}</h1>
//   };
  
//   return (
//     <div className='w-full flex flex-col items-end py-10 gap-2'>
//     {
//         elements.map((items, index)=>(
//             <button key={index} type='button' className='text-[3.5rem] uppercase font-Poppins leading-none tracking-tight font-semibold'>{footer ? filFunction:items}</button>
//         ))
//     }
//     </div>
//   )
// }

// export default RightCompo