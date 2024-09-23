import ArivalCart from "../ArivalCart"
import Nav from "../Nav"
import Footer from "../Footer"
import Subscribe from "../Subscribe"
import { Arival_Feature } from "../../CONSTAINTS"

const Blog = () => {
  return (
    <div className="relative">
      <nav className="pb-12"><Nav/></nav>
      <div className="mt-12">
         <h1 className="font-montserrat font-extrabold text-[80px] max-md:text-[50px]">GEARS</h1>
          <div className='grid grid-col xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 grid-cols-1 mt-16 justify-items-center'>
          {
            <p>hi</p>
          }
        </div>
        </div>
      <div className="mt-12"><Subscribe/></div>
      <div className="mt-10 bg-black py-5 px-5"><Footer/></div>
    </div>
  )
}

export default Blog