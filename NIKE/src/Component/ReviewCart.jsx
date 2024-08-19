import {reviews} from '../Constaints/index';
import {star} from '../assets/icons/index'

export const ReviewCart = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt='customer' className='rounded-full object-contain w-[120px] h-[120px]'/>
        <p className=' text-slate-gray text-center mt-3 max-w-sm info-text'>{feedback}</p>
        <div className='mt-4 flex flex-1 justify-center items-center gap-2'>
            <img src={star} alt="star" className='w-[20px] h-[20px] m-0 ' />
            <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
        </div>
        <h3 className='font-bold text-3xl font-palanquin text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCart