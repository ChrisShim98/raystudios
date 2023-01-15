import React from 'react'
import TermsOfConditions from "../components/termsOfConditions";
import './toc.css'

const TOC = () => {
  return (
    <div className="w-screen py-[12vh] relative">
      <TermsOfConditions />
      <div className='slice-container-2 absolute top-0 z-0 bg-gray-100 w-screen h-screen' />
      <div className='slice-container top-[170vh] absolute z-0 bg-gray-100 w-screen h-screen' />
      <div className='slice-container-2 top-[370vh] absolute z-0 bg-gray-100 w-screen h-screen' />
      <div className='slice-container top-[570vh] absolute z-0 bg-gray-100 w-screen h-screen' />
      <div className='slice-container-2 top-[770vh] absolute z-0 bg-gray-100 w-screen h-screen' />
      <div className='slice-container top-[970vh] absolute z-0 bg-gray-100 w-screen h-screen' />
    </div>
  )
}

export default TOC