import {Button} from '../Component/Button';
import {offer} from '../assets/images/index';
import {arrowRight} from '../assets/icons/index'

const SpecialOffer = () => {
  return (
    <section id="special offer" className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-conntainer'>
       {/*This is the img part */}
       <div className='flex flex-1'>
        <img className='object-contain w-full' src={offer} alt="offer" />

       </div>
        {/*This is the text part */}
        <div className="flex flex-1 flex-col ">
        <h2 className="font-bold  mt-10  font-palanquin max-sm:text-[72px] text-4xl lg:max-w-lg capitalize max-sm:leading-[1.5]">
          <span className='text-coral-red'>Special</span> Offer<br/></h2>
        <p className=" lg:max-w-lg  info-text leading-8 mt-4  ">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className=" lg:max-w-lg info-text leading-8 mt-4 mb-4">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        {/*The button wont stretch anymore, because of the parent div flex-1, or flex:1(in css) */}
        <div className=' flex flex-1 max-sm:grid max-sm:grid-cols-1 gap-4 mt-4 '>
        <Button label="View details" iconURL={arrowRight}  />
        <Button backgroundColor="bg-white"  borderColor="border-slate-gray" textColor="text-slate-gray" label="Learn more" />
        </div>    
      </div>
    </section>
  )
}

export default SpecialOffer