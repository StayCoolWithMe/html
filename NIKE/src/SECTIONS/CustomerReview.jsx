import {reviews} from '../Constaints/index';
import {ReviewCart} from '../Component/ReviewCart'
const CutsomerReview = () => { 
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="font-montserrat text-slate-gray max-w-lg m-auto text-center mt-4">Hear geniune stories from our satisfied customers about their exceptional experinces with us.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col-reverse gap-14">
        {reviews.map((review)=>(
          <ReviewCart key={review.customerName} imgURL={review.imgURL} customerName={review.customerName}
            rating={review.rating}  feedback={review.feedback} 
          />
        ))}

      </div>
    </section>
  )
}

export default CutsomerReview