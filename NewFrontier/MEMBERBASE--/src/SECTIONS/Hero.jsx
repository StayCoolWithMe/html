
import {Home} from '../Doc/images/index'
export const Hero = () => {
  return (
        <section className=" w-full bg-red-300 flex flex-col xl:flex-row-reverse justify-center items-center min-h-screen  max-container"    style={{
          backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FFE4E1 100%)'
          }}>
          {/* This is the img part  */}
          <div className='flex flex-1 relative justify-center items-center max-xl:hidden  xl:min-h-screen max-xl:py-40' >
          <img src={Home} alt="home" className='object-contain relative w-[610px] h-[300px] z-10'/>
          </div>
          {/* This is the text part */}
          <div className="relative xl:w-3/5 flex flex-col gap-5 justify-center items-start w-full max-lg:padding-x lg:padding-x ">
          <h1 className="mt-[100px] font-bold font-montserrat text-4xl max-sm:mt-[100px] max-sm:text-[52px] max-sm:leading-[1.5] lg:max-w-lg ">Access a library of free design resources</h1>
          <h3 className="font-montserrat text-2xl  max-sm:leading-2 max-sm:text-[35px] max-sm:leading-[1.5]">The best resources and books from around the web, collected and curated for your reading.</h3>
          <button className="bg-black text-white font-montserrat py-3 px-6 rounded-xl mb-10">Get Access Now</button>
          </div>

        </section>
  )
}

export default Hero