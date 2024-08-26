import React from 'react';
import { useLocation } from 'react-router-dom';
import {Nav} from './Nav';
    


export const Detail = () => {
  const location=useLocation();
  const {text, imgURL, before, from, price, id}=location.state||{};
  return (
    <div className="relative">
      <nav className='pb-12'><Nav/></nav>

    <div className='grid pt-12 grid-cols-3 max-md:grid-cols-1 gap-3'>
      <div className='col-span-2 px-5'>

      <img className='bg-gray-100 px-5 py-1' src={imgURL} alt="pic" />
      </div>
      <div></div>
    </div>
    </div>
 
  );
};
export default Detail;





   
