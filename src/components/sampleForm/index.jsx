import React from 'react'

import './index.css'

const ContactForm = ({emailSent, setEmailSent}) => {
  
  return (
    <div className='bg-gray-100 w-screen min-h-screen contact-container'>
      
        <div className='min-h-screen flex flex-col justify-center items-center gap-8 font-medium px-4 py-24 lg:py-2'>
            <h1 className='text-4xl md:text-5xl font-bold pb-4 text-center pointer-events-none'>Get a free digital sample of our music</h1>
            <input className='w-[80%] lg:w-[50%] border-2 py-1 px-2' type="text" placeholder='Full Name' />
            <input className='w-[80%] lg:w-[50%] border-2 py-1 px-2' type="text" placeholder='Email Address' />
            
            <div className='w-[80%] lg:w-[50%]'>
                <h3 className='w-full p-1 text-gray-400 px-2 pointer-events-none'>Type your message here</h3>
                <textarea className='border-2 w-full p-2' name="" id="" cols="30" rows="10"></textarea>
            </div>
            
            <button className='text-white bg-black hover:bg-[#9a43c4] text-sm px-4 py-2 font-bold' onClick={() => setEmailSent(true)}>Send</button>
        </div>
    </div>
  )
}

export default ContactForm