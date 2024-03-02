import React, { useLayoutEffect } from 'react'
import TermsOfConditions from "../components/termsOfConditions";
import { motion, useScroll, useTransform } from 'framer-motion'
import './tos.css'

const TOS = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "550%"])
  return (
    <div className="w-screen pb-[12vh] relative">
      <motion.div style={{ y }} className='w-screen h-[40vh] absolute products-header'>
        <div className='w-full h-full px-4 from-[#9a43c4] bg-gradient-to-tr to-[#360050]  flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-white'>Terms of Service</h1>
        </div>
      </motion.div>
      <div className='relative bg-gray-100 rounded-md w-[90vw] md:w-[80vw] mb-[30vh] top-[30vh] left-[5vw] md:left-[10vw] py-12 z-[4] shadow-2xl'>
        <TermsOfConditions />
      </div>
    
      <div className='slice-container top-[170vh] absolute z-0 from-[#9a43c4] bg-gradient-to-tr to-[#360050] w-screen h-screen' />
      <div className='slice-container-2 top-[370vh] absolute z-0 from-[#9a43c4] bg-gradient-to-tr to-[#360050] w-screen h-screen' />
      <div className='slice-container top-[570vh] absolute z-0 from-[#9a43c4] bg-gradient-to-tr to-[#360050] w-screen h-screen' />
      <div className='slice-container-2 top-[770vh] absolute z-0 from-[#9a43c4] bg-gradient-to-tr to-[#360050] w-screen h-screen' />
      <div className='slice-container top-[970vh] absolute z-0 from-[#9a43c4] bg-gradient-to-tr to-[#360050] w-screen h-screen' />
    </div>
  )
}

export default TOS