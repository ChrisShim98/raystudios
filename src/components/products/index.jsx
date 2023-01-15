import React from "react";
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
        <button className='text-white hover:text-black bg-black hover:bg-[#ffd60a] text-sm px-4 py-2 font-bold'>See more</button>
      </div>
    </div>
  );
};

export default Products;
