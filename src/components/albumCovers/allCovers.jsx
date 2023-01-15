import React from 'react'
import Marquee from "react-fast-marquee"

function AlbumCovers() {
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
        <div className='w-screen'>
            <Marquee 
                pauseOnHover={true}
            >
                <div className='flex gap-4 w-[50%] p-2'>
                    {albumCovers.sort(() => 0.5 - Math.random()).slice(0, 14).map((albumLink, index) => {
                        return <img src={albumLink} key={`${albumLink} ${index}1`} className="rounded-lg h-[20vh] hover:scale-[1.05] transition-all" alt="" />
                    })}
                </div> 
            </Marquee>
            <Marquee 
                direction={'right'}
                pauseOnHover={true}
            >
                <div className='flex gap-4 w-[50%] p-2'>
                    {albumCovers.sort(() => 0.5 - Math.random()).slice(0, 14).map((albumLink, index) => {
                        return <img src={albumLink} key={`${albumLink} ${index}2`} className="rounded-lg h-[20vh] hover:scale-[1.05] transition-all" alt="" />
                    })}
                </div> 
            </Marquee>
            <Marquee 
                pauseOnHover={true}
            >
                <div className='flex gap-4 w-[50%] p-2'>
                    {albumCovers.sort(() => 0.5 - Math.random()).slice(0, 14).map((albumLink, index) => {
                        return <img src={albumLink} key={`${albumLink} ${index}3`} className="rounded-lg h-[20vh] hover:scale-[1.05] transition-all" alt="" />
                    })}
                </div> 
            </Marquee>
        </div>
      );
}

export default AlbumCovers;