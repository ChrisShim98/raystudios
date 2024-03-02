import React, {useLayoutEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Notes from  '../components/products/notesBg.png';

const ProductsPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      });
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "250%"])

    let albumCovers = [
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717146/RayStudios/Album%20Covers/Ariana_Grande_-_Positions_nwf2sy.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717146/RayStudios/Album%20Covers/AJR_-_OK_Orchestra_u5pgds.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Kesha_-_Warrior_noplbj.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Camilla_Cabello_-_Havana_gbpkqy.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Weeknd_-_Beauty_Behind_the_Madness_jr6d1h.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Rihanna_-_Loud_b6h7st.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Katy_Perry_-_Prism_kdcb2n.png',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Cardi_B_-_Invasion_of_Privacy_mbsygv.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/Billie_Eilish_-_Happier_Than_Ever_h4foju.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Mac_Miller_-_Circles_qu29oc.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717145/RayStudios/Album%20Covers/YoungBlood_-_Want_you_back_f9ekc5.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Arianna_Grande_-_Sweetener_fmlyzb.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Porter_Robinson_-_Worlds_k7ojh0.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Taylor_Swift_-_1989_qrr7j6.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Nicki_Minaj_-_The_Pink_Print_pug3xj.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Taylor_Swift_-_Lover_ztgtkb.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Charlie_XCX_-_Sucker_n7amnu.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Ashe_-_Rae_apfyin.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Bruno_Mars_-_24K_Magic_jblmyj.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Harry_Styles_-_Fine_Line_sos04v.jpg',
        'https://res.cloudinary.com/diywkaahn/image/upload/v1673717144/RayStudios/Album%20Covers/Selena_Gomez_-_Rare_yzfpvl.jpg'
    ]
  return (
    <div className='w-screen min-h-screen pb-[45vh]' style={{backgroundImage: `url(${Notes})`}}>
        <motion.div style={{y}} className='w-full h-[40vh] absolute products-header'>
            <div className='w-full h-full px-4 from-[#9a43c4] bg-gradient-to-tr to-[#360050] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-white'>Products</h1>
            </div>
        </motion.div>
        <div className='bg-gray-100 rounded-md relative w-[80vw] min-h-[20vh] top-[30vh] left-[10vw] py-8 shadow-2xl'>
            <div className='px-[10vw] gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-5'>
                {albumCovers.map((cover, index) => {
                    return <div className='flex flex-col items-center text-center' key={`${cover} ${index}1`}>
                            <img src={cover} className="rounded-lg w-[20vh] hover:scale-[1.05] transition-all" alt="" />
                            <p className='font-medium'>{cover.split('/')[9].replaceAll('_', ' ').slice(0, -10)}</p>
                            <p>$9.99</p>
                        </div>
                })}
            </div> 
        </div>
           
    </div>
  )
}

export default ProductsPage