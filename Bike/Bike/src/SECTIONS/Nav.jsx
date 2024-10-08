import { Link } from 'react-router-dom';
import {hamburger} from '../assets/icons/index';
import {Logo} from '../assets/images/index';
import {Buy} from '../assets/images/index';
import { useState,useEffect } from 'react';
import Shop from './ADDTIONAlS/Shop';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../SECTIONS/Sidebar';


export const Nav = ({answer}) => {
  const navigator=useNavigate();
  const handleNavigate=()=>{
    navigator('/shop');
  }

  const [isopen,setIsopen]=useState(false);
  const togglesidebar=()=>{
    setIsopen(!isopen);
  }
  
  return (
    <header className="px-5  fixed py-8  z-20 w-full bg-white">
        <nav className="flex flex-row flex-wrap flex-1 justify-between items-center max-container">
            
            {/* first img */}
            <a href=""><img src={Logo} alt="logo" className='w-=[20px] h-[20px] mr-16'/></a>
            {/* Second ul */}
            <ul className='flex flex-1 flex-wrap flex-row  gap-3 max-md:hidden font-palanquin text-xl' >
                <li onClick={()=>handleNavigate()}><a href=""><p>SHOP+</p></a></li>
                <li><a href=""><p>EXPLORE+</p></a></li>
            </ul>
            {/* Third div */}
            <div className='flex flex-row flex-1 flex-wrap justify-end gap-5 items-center'>
              <div className='relative'>
                <Link to={`/Cart`} target='_self'><img src={Buy} alt="sop-logo" className='bg-gray-100  px-1 py-1 rounded-full' /></Link>
                <p id='duck' className=' absolute right-0 top-1 bg-red-400 px-1 text-[10px] rounded-lg' ></p>
              </div>
                <button href="" onClick={togglesidebar} ><img src={hamburger} alt="hamburgr" className='w-[25px] h-[25px] hidden max-md:block' /></button>
              
            </div>
            
        </nav>
      {isopen && <Sidebar isopen={isopen} togglesidebar={togglesidebar}/>}
    </header>
  )
}

export default Nav