import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './index.css'

const ContactHeader = () => {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["10%", "100%"])
  return (
    <div className='w-screen min-h-screen'>
        <motion.div style={{y}} className='w-full h-[40vh] contact-form-header'>
            <div className='w-full h-full px-4 from-[#ffe14e] bg-gradient-to-tr to-[#bc9000] absolute flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-medium'>Have a question?</h1>
                <p className='text-justify'>
                    Thank you so much for an interest in our service. Please fill out the form below 
                    or email us at raystudios@gmail.com, and we will get back to you prompty regarding your
                    request.
                </p>
            </div>
        </motion.div>
        <div className='bg-white w-full relative contact-form-foot'>
            <div className='min-h-[40vh] py-[10vh] flex flex-col justify-center items-center gap-8 font-medium px-4'>
                <input className='w-[80%] lg:w-[50%] border-2 py-1 px-2' type="text" placeholder='Full Name' />
                <input className='w-[80%] lg:w-[50%] border-2 py-1 px-2' type="text" placeholder='Email Address' />
                
                <div className='w-[80%] lg:w-[50%]'>
                    <h3 className='w-full p-1 text-gray-400 px-2 pointer-events-none'>Type your question here</h3>
                    <textarea className='border-2 w-full p-2' name="" id="" cols="30" rows="10"></textarea>
                </div>
                
                <button className='text-white hover:text-[#ffd60a] bg-black hover:bg-[#001d3d] text-sm px-4 py-2 font-bold'>Send</button>
            </div>
        </div>
        
    </div>
    

  )
}

export default ContactHeader