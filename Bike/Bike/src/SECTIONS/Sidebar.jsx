import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Sidebar = ({isopen,togglesidebar}) => {
   const navigator=useNavigate();
  const handleNavigate=()=>{
    navigator('/shop');
  }
  return (
      <div
      className={`fixed top-0 right-0 w-64 h-full bg-gray-50 `}
        
    >
      
      <button
        className="absolute top-4 right-4 text-gray-500 text-[20px]"
        onClick={togglesidebar}
      >
        ✕
      </button>
      <ul className='mt-12 px-5'>

      <li onClick={()=>handleNavigate()}><a href=""><p>SHOP+</p></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
