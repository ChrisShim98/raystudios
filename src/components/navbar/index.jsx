import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { ReactComponent as Logo2 } from "./raystudioslogo.svg";
import './index.css'

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(2);
  const [menuStyle, setMenuStyle] = useState('');
  
  useEffect(() => {
    menuOpened === 1 ? setMenuStyle("fixed w-screen h-screen bg-black menu-mobile-opened block md:hidden") :
    menuOpened === 0 ? setMenuStyle("fixed w-screen h-screen bg-black z-0 menu-mobile-closed block md:hidden") :
    setMenuStyle("fixed w-screen h-screen bg-black z-0 block menu-mobile md:hidden");
  }, [menuOpened])

  return (
    <div className="w-screen fixed top-0 right-0 z-20">
      <div className={menuStyle}>
        <ul className="flex flex-col w-screen h-screen items-center justify-center gap-4">
          <li className="text-white font-bold hover:text-[#9a43c4] text-3xl">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/' onClick={() => {setMenuOpened(0);}}>Home</NavLink>
          </li>
          <li className="text-white font-bold hover:text-[#9a43c4] text-3xl">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/products' onClick={() => {setMenuOpened(0);}}>Products</NavLink>
          </li>
          <li className="text-white font-bold hover:text-[#9a43c4] text-3xl">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/contactus' onClick={() => {setMenuOpened(0);}}>Contact Us</NavLink>
          </li>
          <li className="text-white font-bold hover:text-[#9a43c4] text-3xl">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/tos' onClick={() => {setMenuOpened(0);}}>Terms of Service</NavLink>
          </li>
        </ul>
      </div>
      <div className="bg-black h-[8%] relative flex text-sm md:text-base">
        <div className="w-[20vw] pl-[1vw] md:pl-[3vw] pt-1 justify-start items-center">
          <Logo2
            className="h-12 md:h-16"
            fill={"white"}
            alt="logo"
          />
        </div>

        <ul className="flex w-screen h-full p-3 md:p-5 pr-[3vw] justify-end gap-4 items-center">
          <li className="text-white font-bold cursor-pointer hover:text-[#9a43c4] hidden md:block">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/'>Home</NavLink>
          </li>
          <li className="text-white font-bold cursor-pointer hover:text-[#9a43c4] hidden md:block">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/products'>Products</NavLink>
          </li>
          <li className="text-white font-bold cursor-pointer hover:text-[#9a43c4] hidden md:block">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/contactus'>Contact Us</NavLink>
          </li>
          <li className="text-white font-bold cursor-pointer hover:text-[#9a43c4] hidden md:block">
            <NavLink style={({isActive}) => {return isActive ? {color: "#9a43c4"} : {}}} to='/tos'>Terms of Service</NavLink>
          </li>
          <div className="text-white md:hidden">
            {menuOpened === 1 ? 
              <VscClose
                size={"1.5rem"}
                onClick={() => {setMenuOpened(0);}}
              /> :
              <RxHamburgerMenu
                size={"1.5rem"}
                onClick={() => {setMenuOpened(1);}}
              />
            }  
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
