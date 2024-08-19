
import {products} from '../Constaints/index'
import {PopularProductCard} from "../Component/PopularProductCard"
const PopularProduct = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      {/**text part */}
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experince top notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      {/**Cart part */}
      <div className="mt-16  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default PopularProduct