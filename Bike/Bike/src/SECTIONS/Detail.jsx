import React from 'react';
import { useLocation } from 'react-router-dom';
import {Nav} from './Nav';
    


export const Detail = () => {
  const location=useLocation();
  const {text, imgURL, before, from, price, id,detail_information}=location.state||{};
  return (
    <div className="relative">
      <nav className='pb-12' ><Nav/></nav>

    <div className=' grid pt-12 grid-cols-3 max-md:grid-cols-1 gap-3 mb-[1000px]'>
      <div className='col-span-2 px-5 max-md:col-span-3'>
          <img className='bg-gray-100 px-5 py-[100px] h-auto w-full' src={imgURL} alt="pic" />

          <div className='mt-5'>
            <h4 className='mt-5 font-palanquin font-extrabold text-3xl '>Description</h4>
            <h5 className='mt-5 font-palanquin font-bold text-lg'>The adventure is waiting for you.</h5>
            <p className='mt-5 font-montserrat leading-7 text-md '>With a top quality aluminium frame and a Shimano groupset, the BROAM | 30 is a great choice for anyone who wants a versatile bike that is capable of taking on numerous adventures. Ready to take pannier racks, mudguards and panniers, the BROAM can accompany you on bikepacking or long overland tours. Comfortable on tarmac or gravel roads, the BROAM offers an exciting mix for riders of all skill levels.</p>
            <p className='mt-5 font-montserrat leading-7 text-md '>The combination of Shimano components on the BROAM | 30 offers a wide range of gear ratios with a 2x drivetrain, making it versatile for flat terrain, climbs and descents, while retaining the ease of use for which Shimano is renowned.</p>
            <p className='mt-5 font-montserrat leading-7 text-md '>The BROAM frame is equipped with various mounting points for attaching bags, mudguards and pannier racks. Whether you're a commuter or equipped for long-distance adventures, the versatility is at your fingertips.</p>
          </div>

          <h5 className='mt-10  font-palanquin font-bold text-lg '>Specifications.</h5>         
          <div className='relative w-full mt-12'>
                <div className='grid grid-cols-2 max-md:grid-cols-1  gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Brake</div>
                    <div className='font-montserrat text-md'>{detail_information.brake}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Fork</div>
                    <div className='font-montserrat text-md'>{detail_information.fork}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Colors</div>
                    <div className='font-montserrat text-md'>{detail_information.color}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Rear</div>
                    <div className='font-montserrat text-md'>{detail_information.rearTyre}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Cassete</div>
                    <div className='font-montserrat text-md'>{detail_information.cassette}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Crankset</div>
                    <div className='font-montserrat text-md'>{detail_information.crankset}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Wheel</div>
                    <div className='font-montserrat text-md'>{detail_information.wheelSize}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Wheelset</div>
                    <div className='font-montserrat text-md'>{detail_information.wheelSheet}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Handlebars</div>
                    <div className='font-montserrat text-md'>{detail_information.handlebar}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Model</div>
                    <div className='font-montserrat text-md'>{detail_information.modelYear}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Frame</div>
                    <div className='font-montserrat text-md'>{detail_information.frame}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Frame</div>
                    <div className='font-montserrat text-md'>{detail_information.frameSize}</div>
                </div>  

                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Saddle</div>
                    <div className='font-montserrat text-md'>{detail_information.saddle}</div>
                </div>  

                   <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Shifter</div>
                    <div className='font-montserrat text-md'>{detail_information.shifter}</div>
                </div>  

                   <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl  '>Rear</div>
                    <div className='font-montserrat text-md'>{detail_information.rearDerailleur}</div>
                </div>  

                   <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Front</div>
                    <div className='font-montserrat text-md'>{detail_information.frontDerailleur}</div>
                </div>  

                   <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl '>Stem</div>
                    <div className='font-montserrat text-md'>{detail_information.stem}</div>
                </div>  

               

                
               
                
          
          </div> 

      </div>
      
      <div>
        
      </div>
    </div>

    </div>
 
  );
};
export default Detail;






   
