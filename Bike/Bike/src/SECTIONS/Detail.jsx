import React from 'react';
import { useLocation } from 'react-router-dom';
import {Nav} from './Nav';
import {Footer} from './Footer';
import {handleAddtoCart} from './Calculation';
import {handlePrice} from './Calculation';
import { Arival_Feature } from '../CONSTAINTS';

import { useEffect } from 'react';


    


export const Detail = () => {
  const location=useLocation();
  const {text, imgURL, before, from, price,addToCart, id,btn,detail_information}=location.state||{};
  useEffect(()=>{
    window.scroll(0,0)
  },[location]);

  return (
    <div className="relative">
      <nav className='pb-12' ><Nav/></nav>

    <div className=' grid pt-12 grid-cols-3 gap-1 max-md:grid-cols-1 mb-[100px]'>
     {/* left side -------------------------------------------------------*/}
      <div className='col-span-2 px-5 max-md:col-span-3 '>
          <img className='bg-gray-100 px-5 py-[100px] h-auto w-full' src={imgURL} alt="pic" />

          {(id>=1&&id<=9)?(
            <div className='mt-5'>
            <h4 className='mt-5 font-palanquin font-extrabold max-md:text-3xl text-4xl '>Description</h4>
            <h5 className='mt-5 font-palanquin font-bold text-lg'>The adventure is waiting for you.</h5>
            <p className='mt-5 font-montserrat leading-7 text-md '>With a top quality aluminium frame and a Shimano groupset, the BROAM | 30 is a great choice for anyone who wants a versatile bike that is capable of taking on numerous adventures. Ready to take pannier racks, mudguards and panniers, the BROAM can accompany you on bikepacking or long overland tours. Comfortable on tarmac or gravel roads, the BROAM offers an exciting mix for riders of all skill levels.</p>
            <p className='mt-5 font-montserrat leading-7 text-md '>The combination of Shimano components on the BROAM | 30 offers a wide range of gear ratios with a 2x drivetrain, making it versatile for flat terrain, climbs and descents, while retaining the ease of use for which Shimano is renowned.</p>
            <p className='mt-5 font-montserrat leading-7 text-md '>The BROAM frame is equipped with various mounting points for attaching bags, mudguards and pannier racks. Whether you're a commuter or equipped for long-distance adventures, the versatility is at your fingertips.</p>
          </div>
          ):(
            <div className='mt-5'>
                <h4 className='mt-5 font-palanquin font-extrabold max-md:text-3xl text-3xl '>Discover the Unknown</h4>
                    <h5 className='mt-5 font-palanquin font-bold text-lg'>Your next adventure starts here.</h5>
                    <p className='mt-5 font-montserrat leading-7 text-md '>Embark on a new journey with a bike designed for endless possibilities. Whether you're exploring city streets or rugged trails, our latest model brings you unmatched versatility and performance. Equipped with a lightweight frame and cutting-edge technology, it's built to conquer any challenge.</p>
                    <p className='mt-5 font-montserrat leading-7 text-md '>With multiple configurations available, this bike adapts to your needs—whether you're in for a quick commute or an extended tour. Built for comfort and control, it offers a smooth ride across a variety of terrains. The ultimate freedom is just a ride away.</p>
                    <p className='mt-5 font-montserrat leading-7 text-md '>Take your biking experience to the next level with advanced braking systems, customizable gearing, and robust tires built for longevity. Every detail is crafted to enhance your ride, no matter where your adventure takes you.</p>
              </div>
          )}

          <h5 className=' mt-5 font-palanquin font-extrabold max-md:text-3xl text-4xl '>Specifications</h5>         
         {/* Bike spec */}
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

                {detail_information.wheelSize && (
              <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Wheel</div>
                    <div className='font-montserrat text-md'>{detail_information.wheelSize}</div>
                  </div>
                )}

                {detail_information.wheelSheet && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Wheelset</div>
                    <div className='font-montserrat text-md'>{detail_information.wheelSheet}</div>
                  </div>
                )}

                {detail_information.handlebar && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Handlebars</div>
                    <div className='font-montserrat text-md'>{detail_information.handlebar}</div>
                  </div>
                )}

                {detail_information.modelYear && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Model</div>
                    <div className='font-montserrat text-md'>{detail_information.modelYear}</div>
                  </div>
                )}

                {detail_information.frame && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Frame</div>
                    <div className='font-montserrat text-md'>{detail_information.frame}</div>
                  </div>
                )}

                {detail_information.frameSize && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Frame Size</div>
                    <div className='font-montserrat text-md'>{detail_information.frameSize}</div>
                  </div>
                )}

                {detail_information.saddle && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Saddle</div>
                    <div className='font-montserrat text-md'>{detail_information.saddle}</div>
                  </div>
                )}

                {detail_information.shifter && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Shifter</div>
                    <div className='font-montserrat text-md'>{detail_information.shifter}</div>
                  </div>
                )}

                {detail_information.rearDerailleur && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Rear Derailleur</div>
                    <div className='font-montserrat text-md'>{detail_information.rearDerailleur}</div>
                  </div>
                )}

                {detail_information.frontDerailleur && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Front Derailleur</div>
                    <div className='font-montserrat text-md'>{detail_information.frontDerailleur}</div>
                  </div>
                )}

                {detail_information.stem && (
                  <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 max-md:gap-2 gap-y-50'>
                    <div className='font-palanquin font-semibold text-xl'>Stem</div>
                    <div className='font-montserrat text-md'>{detail_information.stem}</div>
                  </div>
                )}


              <details className='mt-10 bg-gray-100 py-5 px-3'> 
                <summary className='font-palanquin text-lg font-bold'>Simply assembly</summary>
                <p className='font-montserrat mt-3 text-slate-gray font-md '>Your bike already arrives 95% built. We give you the tools. And simple instructions. No technical skills needed.</p>
              </details>

              <details className='mt-10 bg-gray-100 py-5 px-3'> 
                <summary className='font-palanquin text-lg font-bold'>6 Year Guarantee</summary>
                <p className='font-montserrat mt-3 text-slate-gray font-md' >That’s our quality promise – if you’re not 100% happy with your bike, we’re not happy either..</p>
              </details>
          </div> 
      </div>


      {/* Side bar ---------------------------------------------------------*/}
      <div className="px-5 right-5 mt-3">
        <h3 className='font-palanquin text-xl font-semibold mb-5'>{text}</h3>

        <p className='font-palanquin text-slate-gray mb-5 text-xl'>{from}</p>

        <p className='font-motserrat text-2xl font-semibold'>${price}USD</p>
        {/* size---------------------------------------- */}
        <p className='font-motserrat text-md font-semibold mt-5 '>SIZE</p>

        <select id='size_selection_options' className='border-2 border-black rounded-md px-3 py-1  mt-5'>
          <option value=""></option>
          <option value="S1">S1</option>
          <option value="S2">S2</option>
          <option value="S3">S3</option>
          <option value="S4">S4</option>
          <option value="S5">S5</option>
          <option value="S6">S6</option>
        </select>
        
  
        {/* Quantity------------------------------ */}
        <p className='font-motserrat text-md font-semibold mt-5 '>Quantity</p>
        <input id='quantity_selection' type="number" className='border-2 py-2 px-2 mt-3 w-1/2 bg-gray-100' defaultValue={1} min={1}/>
        <button onClick={()=>{handleAddtoCart(id);handlePrice();window.location.reload()}}  className='mt-5 py-5 w-full bg-blue-500 text-white font-palanquin font-semibold rounded-md text-xl'>Add To Cart</button>


      </div>
    </div>

    {/* Footer----------------------------- */}
    <footer className='bg-black py-5 px-5'>
    <Footer/>
    </footer>
    </div>
 
  );
};
export default Detail;






   
