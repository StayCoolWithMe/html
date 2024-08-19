
import FeaturesCard from '../Component/FeaturesCard'
import {Features} from '../Constaints/index'
export const Service = () => {
  return (
    <section className="max-container  max-sm:mt-10">
        {/* This is the text part */}
      <div className="flex flex-1 flex-wrap  justify-between items-center">
        <h3 className="font-palanquin text-3xl font-bold max-lg:max-w-lg">Feature Resources</h3>
        <button className="hidden lg:block font-palanquin px-5 py-3 bg-slate-50 border rounded-lg border-black ">See All Resources</button>
      </div>
      {/* This is the card part */}
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 justify-items-center">
         {
          Features.map((feature) => (
            <FeaturesCard key={feature.name} {...feature}/>
          ))
        }
     
      </div>


    </section>
  )
}

export default Service