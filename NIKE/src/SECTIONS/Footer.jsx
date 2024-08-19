
import {footerLogo} from '../assets/images/index';
import {socialMedia} from '../Constaints/index';
import {footerLinks} from '../Constaints/index';
import {copyrightSign} from '../assets/icons/index'
const Footer = () => {
  return (
    <footer className="max-container border-5">
      <div className="flex justify-between flex-wrap items-start gap-20 flex-1 max-lg:flex-col">
        {/**This is the first part */}
        <div className="flex flex-1 flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="footer" className='w-[140px] h-[56px] '/>
          </a>
          <p className='text-base font-montserrat leading-7 text-white-400 sm:max-w-sm mt-6'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.</p>
          <div className='flex flex-1 mt-8 items-center gap-5 '>
            {socialMedia.map((icon)=>(
            <div className='flex justify-center items-center w-12 h-12 bg-white-400 rounded-full'>
              <img src={icon.src} alt={icon.alt} className='w-[24px] h-[24px]' />
            </div>
            ))}

          </div>
        </div>
        {/**This is the second part */}
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap '>
          {footerLinks.map((link)=>(
            <div key={link}>
              <h4 className='text-white-400 font-bold'>{link.title}</h4>
              <ul className='text-white-400 gap-3 '>{link.links.map((section)=>(
                <li className='mt-3 text-white-400 font-montserrat leading-normal hover:text-slate-gray cursor-pointer'>
                  <a>{section.name}</a>
                </li>
              ))}</ul>
            </div>
          ))}
        </div>
      
      </div>
        {/**This is the third part */}

        <div className='flex justify-between text-white-400 mt-24 max-sm:items-center max-sm:flex-col '>
          <div className='flex justify-start items-start gap-2 font-montserrat cursor-pointer'>
            <img className='rounded-full w-[20px] h-[20px]' src={copyrightSign} alt="copy"/>
            <p >Copyright. All right reserve</p>
          </div>
          <p className='font-montserrat cursor-pointer hover:text-slate-gray text-white-400'>Term and Condition</p>         
        </div>
    </footer>
  )
}

export default Footer