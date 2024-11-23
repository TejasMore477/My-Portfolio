import React from 'react'

function ImageContainer({imageSource, description, imageAlt}) {
  return (
    <div className='image-container'>
       
        <img className='image rounded-xl h-[50vh]' src={imageSource} alt={imageAlt} />
        <p className='date'>{description}</p>
    </div>
  )
}

export default ImageContainer