import { member } from '../Doc/images/';
import { hamburger } from '../Doc/icons/index';
import { useEffect, useState } from 'react';



export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const [menuOpen, setMenuOpen] = useState(false); // **Added state for menu visibility**

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Adjust this value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    //sticky header 
      <header className={`fixed backdrop-blur-md top-0 z-10 w-full bg-white-400 transition-all duration-300 ${scrolled ? 'px-4 py-4' : 'px-8 py-8'}`}>
      <nav className="flex justify-between items-center max-container ">
        {/* This is the logo part */}
        <a href="/">
          <img src={member} alt="logo" className="w-[140px] h-[29px]" />
        </a>
        {/* This is the links part  */}
        <ul className="flex justify-center items-center gap-10 lg:flex hidden">
          <li>
            <a href="/">All resources</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">
             <button className="relative py-3 px-3 font-semibold text-white bg-black rounded-md overflow-hidden transition-transform duration-300 group hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
                <span className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                <span className="relative z-10">Free Sign Up</span> 
            </button>
            </a>
          </li>        
        </ul>
        {/* This is the burger */}
        <div className="lg:hidden flex items-center">
          <img src={hamburger} alt="hamburger" className="w-[25px] h-[25px]" />
        </div>
      </nav>

      
    
      
    </header>
  );
};

export default Nav;






