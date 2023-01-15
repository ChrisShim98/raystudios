import React from 'react'
import './index.css'

const Landing = () => {
  return (
    <div className='h-screen w-screen bg-black sliced-container text-white absolute'>
        <div className='grid grid-flow-col w-full h-full'>
            <div className='w-full h-full from-[#000000] bg-gradient-to-r to-[#fff0] z-10'>
              <div className='w-full h-full flex flex-col place-items-center justify-center text-left'>
                <div className='w-full pl-[3vw]'>
                  <h3 className='text-xs lg:text-lg pb-2 md:pb-4 pointer-events-none'>We are Ray Studios, a company that makes and distributes music</h3>
                  <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold pb-4 md:pb-8 pointer-events-none'>We love to create</h1>
                  <p className='text-[0.6rem] lg:text-xs pb-4 md:pb-8 pointer-events-none w-[90vw] md:w-[45vw] lg:w-[35vw]'>We want to convey a sense of mystery while simultaneously being realistic! 
                    Music is at the heart of everything we do and fuels our creativity and imagination. Find your inner light and share it with the world! Enjoy our 
                    masterful selections from around the world.</p>
                  <button className='text-black hover:text-white bg-white hover:bg-[#9a43c4] text-sm px-4 py-2 font-bold'>Our Products</button>
                </div> 
              </div>             
            </div>
            <div className='w-full col-span-10 lg:col-span-6 h-full grid place-items-end pointer-events-none'>
              <img className='h-[85vh] absolute right-0 bottom-0 object-cover' src='https://res.cloudinary.com/diywkaahn/image/upload/v1673741783/RayStudios/Landing%20Page/landingImg_uhy8jr.png' alt="landing" />
            </div>
        </div>
    </div>
  )
}

export default Landing