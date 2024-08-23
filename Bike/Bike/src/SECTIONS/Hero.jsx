import {Background} from '../assets/images/index';
import { Bike1 } from '../assets/images/index';

export const Hero = () => {
  return (
     <section
      className="py-5 z-2 mt-16 relative padding-x max-container w-full min-h-screen bg-slate-400 "
      style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center',  width: '100%',}}
    >
      <h1 className='font-palanquin font-extrabold m-0 p-0  max-md:max-w-md left-4 absolute max-md:text-[72px] max-md:leading-[1.5] text-8xl text-white max-xl:max-w-xl '>RISE WITH <br /> THE RIDING</h1>
      <h3 className='absolute text-white z-10 bottom-5 left-5 max-sm:hidden font-palanquin font-bold left-0 max-sm:max-w-sm '>YOUR SHOP BICYCLES AND E-BIKES IN SWITZERLAND.</h3>

       <div className="block max-xl:hidden absolute bottom-7 right-5">
      <img src={Bike1} alt="bike" className=" w-[520px] bg-white  h-[520px] object-contain transition-transform duration-300 hover:translate-y-[-1.5px]" />
      {/* top text */}
      <h3 className='absolute font-palanquin top-5 left-4 font-bold text-lg max-lg:max-w-lg '>S-Works Turbo Levo SL Carbon- <br /> Rusted Red/Redwood</h3>
      <p className='font-palanquin text-slate-gray left-4 mt-5 absolute top-12'>Enduro</p>
      {/* bottom text */}
      <p className='text-md text-slate-gray font-palanquin line-through absolute bottom-12 left-4'>$21,199.00USD</p>
      <div className='flex flex-1 flex-wrap justify-between items-center'>
        <p className='font-bold font-palanquin text-lg absolute bottom-5 left-4 '>$14,599.00USD</p>
        <div className='flex flex-row items-center gap-9 absolute right-8 bottom-5 justify-center'>
          <button className='font-palanquin rounded-full py-0 px-5 border border-solid border-black '>New</button>
          <button className='font-palanquin rounded-full py-0 px-5 border text-coral-red border-coral-red border-solid'>Sale</button>
        </div>
      </div>
      
     
      </div>
    </section>


  )
}

export default Hero



// transition-transform duration-300 hover:translate-y-0.5
// 1.translate
