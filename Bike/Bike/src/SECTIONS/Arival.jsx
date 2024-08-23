import { useState } from 'react';
import {Arival_Feature} from '../CONSTAINTS/index';
import {ArivalCart} from '../SECTIONS/ArivalCart';



export const Arival = () => 
  {
    
  const cart_array=[];
   const handleAddtoCart=(id)=>{
//If the find() method finds an element that matches the condition, the value of item will be the entire object that was found.
    const item=Arival_Feature.find((feature)=>(feature.id)==id); 
    
    // const newWindow = window.open("about:blank", "_self");
    if(item)
    {
      console.log("Indivitual item"+item);
      cart_array.push(item);
      console.log("ALL item:"+cart_array);
      console.log("Lenght:"+cart_array.length);
      
      
    }
  }






  return (
    <div>
      <div className="flex justify-between flex-1 flex-wrap items-center flex-row max-sm:flex-col max-sm:items-start">
        <h2 className="font-extrabold xl:max-w-xl font-palanquin text-4xl text-[42px]">NEW ARRIVALS</h2>
        <p  className="font-palanquin text-lg text-coral-red font-semibold underline">Shop All</p>
      </div>

      {/* Item part  */}
        <div className='grid grid-col xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 grid-cols-1 mt-16 justify-items-center'>
          {
            Arival_Feature.map((feature)=>
            (
              <ArivalCart key={feature.id} {...feature} handleAddtoCart={handleAddtoCart}  />
            ))
          }
        </div>
    </div>
  )
}

export default Arival