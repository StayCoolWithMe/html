// Hero.jsx

import Button from "../Component/Button";
import { arrowRight } from "../assets/icons/index"; 
import {bigShoe1} from "../assets/images/index";
import {ShoesCart} from  "../Component/ShoesCart";
import {statistics} from '../Constaints/index';
import {shoes} from "../Constaints/index";
import { useState } from "react";

const Hero = () => {
   const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section className=" w-full flex flex-1 flex-col xl:flex-row 
    justify-center items-center min-h-screen max-container gap-10">
      {/*this is the text part*/}
      <div className="relative xl:w-2/5  flex flex-col justify-center items-start w-full
      max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        
        <h1 className="font-bold  mt-10 font-palanquin max-sm:text-[72px] text-8xl max-sm:leading-[1.5]">
          <span className="bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br/>
        <span className="text-coral-red mt-3 inline-block pr-2">Nike</span>  
         Shoes</h1>
         
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-4 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start w-full mt-20 flex-wrap gap-16">
          {statistics.map((status) => (
            <div>
              <p className="text-4xl font-bold font-palanquin">{status.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{status.label}</p>
            </div>
          ))}
        </div>    
      </div>
      


        {/*This is the image part */}
      <div className="relative flex-1 flex justify-center items-center border-2 xl:min-h-screen max-xl:py-40
      bg-primary bg-hero bg-center bg-cover">
        <img src={bigShoeImg} alt="Shoes Collection" className="w-[610] h-[500] object-contain relative z-10"/>

          {/*This is the cart part */}
          <div className="flex gap-4 sm:gap-6 justify-center absolute sm:left-[10%] max-sm:px-6 -bottom-[8%]">
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoesCart imgURL={shoe} changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)} bigShoeImage={bigShoeImg} />
              </div>
            ))}
          </div>
    
      </div>
    </section>
  );
}

export default Hero;
