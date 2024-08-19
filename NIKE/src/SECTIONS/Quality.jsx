import {Button} from '../Component/Button';
import {shoe8} from '../assets/images/index'
const Quality = () => {
  return (
    <section id="about-us" className="w-full max-container flex max-lg:flex-col justify-between gap-10 ">
      
      {/*This is the text part */}
      <div className="flex flex-1 flex-col ">
        <h2 className="font-bold  mt-10 font-palanquin max-sm:text-[72px] text-4xl lg:max-w-lg capitalize max-sm:leading-[1.5]">
          We Provide You<br/>
        <span className="text-coral-red mt-3 inline-block pr-2">Super</span>  
        <span className="text-coral-red mt-3 inline-block pr-2">Quality</span>  
         Shoes</h2>  
        <p className=" lg:max-w-lg info-text leading-8 mt-4 mb-4 ">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance</p>
        <p className='info-text lg:max-w-lg mt-6'>Our dedication to detail and excellence ensures your satisfication</p>
        <div className='mt-4'>{/*The button wont stretch anymore, because of the parent div flex-1, or flex:1(in css) */}
        <Button label="Learn More" />
        </div>    
      </div>

      
    {/*This is the img part */}
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoes8" className="w-[570px] h-[522px] object-contain" />
      </div>

     
    </section>
  )
}

export default Quality