import React, { useState } from 'react';
import Detail from '../SECTIONS/Detail';
import { Link } from 'react-router-dom';



export const ArivalCart = ({text, imgURL, before, btn, salebtn=undefined, from, price, handleAddtoCart, id, addToCart}) => {
  



  return (
     <Link to={`/detail/${id}`} target='_blank' >
    <div  className="flex border flex-wrap flex-1 gap-4 max-sm:h-[510px] max-sm:gap-6 justify-start px-3 h-[500px] max-md:h-[600px] items-start w-full max-sm:w-full hover:bg-gray-100 transition duration-100 hover:translate-y-[-5px]">
      <div>
        <h3 className="font-palanquin font-semibold text-2xl mt-3">{text}</h3>
        <p className="font-palanquin text-slate-gray text-lg mt-4">{from}</p>
      </div>

      <img src={imgURL} alt="pic" />

      <div className="flex flex-col w-full">
        <p className="font-palanquin text-sm line-through text-slate-gray">{before}</p>
        
        <div className="flex justify-between w-full items-center">
          <p className="font-palanquin font-bold text-md">{price}</p>
          <div className="flex flex-row gap-2">
            <button className="font-palanquin text-white bg-coral-red py-1 px-3 rounded-full" onClick={() => handleAddtoCart(id)}>{addToCart}</button>
            <button className="border px-3 py-0 border-solid max-sm:hidden border-black rounded-full">{btn}</button>
            {salebtn && (
              <button className="border px-3 py-0 border-coral-red max-sm:hidden text-coral-red rounded-full">{salebtn}</button>
            )}
          </div>
        </div>
      </div>
    </div>
    </Link>
    
    
  );
};

export default ArivalCart;
