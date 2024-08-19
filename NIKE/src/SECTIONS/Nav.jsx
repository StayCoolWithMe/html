import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import {navLinks}  from '../Constaints/index'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="LOGO" className='w-[130px] h-[29px] ' /></a>
            
            <ul className='flex justify-center gap-16 items-center max-lg:hidden'>
               {navLinks.map((item=>(
                <li key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                        {item.label}
                    </a>
                </li>
               )))}  

            </ul>

            <div>
               <img src={hamburger} className='w-[25px] h-[25px] hidden max-lg:block'></img>
            </div>
        </nav>
    </header>
  )
}

export default Nav