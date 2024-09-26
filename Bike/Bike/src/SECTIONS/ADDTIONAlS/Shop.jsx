import Nav from "../Nav"
import Footer from "../Footer"
import Subscribe from "../Subscribe"
import { Arival_Feature } from "../../CONSTAINTS"
import ArivalCart from "../ArivalCart"
const Shop = () => {
  return (
    <div className="relative">
        <nav className="pb-12"><Nav/></nav>
        <section className="mt-12 px-5">
               <div className='grid grid-col xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 grid-cols-1 mt-16 justify-items-center'>
                {Arival_Feature.map((feature)=>(
                    <ArivalCart key={feature.id} {...feature}/>
                ))}
               </div>
        </section>
        <section className="mt-12"><Subscribe/></section>
        <section className="mt-12 bg-black px-5 py-5"><Footer/></section>
    </div>
  )
}

export default Shop