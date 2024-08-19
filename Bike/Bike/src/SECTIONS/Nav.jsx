import {hamburger} from '../assets/icons/index';
import {Logo} from '../assets/images/index';
import {Buy} from '../assets/images/index';

export const Nav = () => {
  return (
    <header className="px-5 py-8 absolute z-10 w-full bg-white">
        <nav className="flex flex-row flex-wrap flex-1 justify-between items-center max-container">
            
            {/* first img */}
            <a href=""><img src={Logo} alt="logo" className='w-=[20px] h-[20px] mr-16'/></a>
            {/* Second ul */}
            <ul className='flex flex-1 flex-wrap flex-row  gap-3 max-md:hidden font-palanquin text-xl' >
                <li><a href=""><p>SHOP+</p></a></li>
                <li><a href=""><p>EXPLORE+</p></a></li>
            </ul>
            {/* Third div */}
            <div className='flex flex-row flex-1 flex-wrap justify-end gap-5 items-center'>
                <a href=""><img src={Buy} alt="Buy" /></a> 
                <a href=""><img src={hamburger} alt="hamburgr" className='w-[25px] h-[25px] hidden max-md:block' /></a>
            </div>
            
        </nav>

    </header>
  )
}

export default Nav