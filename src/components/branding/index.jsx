import React from 'react'
import './index.css'
import {BsPlay} from 'react-icons/bs'
import {FiMusic} from 'react-icons/fi'
import {TbCurrencyDollar} from 'react-icons/tb'

const Branding = () => {
  return (
    <div className='bg-gray-100 w-screen min-h-[75vh] branding-container text-center'>
        <div className='w-full min-h-[75vh] flex flex-col lg:flex-row py-20 lg:py-0 place-content-center place-items-center gap-4 lg:gap-6'>
            <div className='w-[75%] lg:w-[25%] flex flex-col place-content-center place-items-center'>
                <div className='border-2 hover:bg-[#9a43c4] hover:text-white rounded-full border-gray-300 w-20 h-20 flex place-content-center place-items-center'>
                    <BsPlay className='ml-1' size={'10rem'}/>
                </div>
                <div className='pt-4 pointer-events-none'>
                    <h1 className='font-bold text-2xl'>Top Songs</h1>
                    <p className='pt-4 text-sm'>
                        Our music has been signed and produced by the biggest names in the industry
                        and is known on an international level.
                    </p>
                </div>
            </div>
            <div className='w-[75%] lg:w-[25%] flex flex-col place-content-center place-items-center'>
                <div className='border-2 hover:bg-[#9a43c4] hover:text-white rounded-full border-gray-300 w-20 h-20 flex place-content-center place-items-center'>
                    <FiMusic className='mr-1' size={'3rem'}/>
                </div>
                <div className='pt-4 pointer-events-none'>
                    <h1 className='font-bold text-2xl'>Internationally Acclaimed</h1>
                    <p className='pt-4 text-sm'>
                        Our music has been signed and produced by the biggest names in the industry
                        and is known on an international level.
                    </p>
                </div>
            </div>
            <div className='w-[75%] lg:w-[25%] flex flex-col place-content-center place-items-center'>
                <div className='border-2 hover:bg-[#9a43c4] hover:text-white rounded-full border-gray-300 w-20 h-20 flex place-content-center place-items-center'>
                    <TbCurrencyDollar size={'3rem'}/>
                </div>
                <div className='pt-4 pointer-events-none'>
                    <h1 className='font-bold text-2xl'>Affordable</h1>
                    <p className='pt-4 text-sm'>
                        Our music comes at the best quality while still being affordable and fits
                        into any budget.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Branding