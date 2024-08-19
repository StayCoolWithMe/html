
 import {star} from '../assets/icons/index'
export const PopularProductCard = ( {imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" className="w-[24px] h-[24] relative " />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>{4.5}</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='font-montserrat text-coral-red mt-2 text-21x leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard