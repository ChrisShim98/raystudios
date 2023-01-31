import React from "react";
import { NavLink } from "react-router-dom";
import AlbumCovers from "../albumCovers/allCovers";
import './index.css'

const Products = () => {
  return (
    <div className="bg-white w-screen min-h-screen flex flex-col place-content-center products-container py-8">
        
      <h1 className="text-4xl md:text-5xl font-bold w-full text-center p-10 pointer-events-none">Top selling albums</h1>

      <div className="flex">
        <AlbumCovers />   
      </div>
      <div className="w-full flex justify-center pt-4">
        <NavLink to='/products'><button className='text-white bg-black hover:bg-[#9a43c4] text-sm px-4 py-2 font-bold'>See more</button></NavLink>
      </div>
    </div>
  );
};

export default Products;
