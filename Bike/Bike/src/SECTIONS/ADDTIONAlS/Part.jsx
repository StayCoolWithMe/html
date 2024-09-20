import Nav from "../Nav";
import Footer from "../Footer";
import Subscribe from '../Subscribe';
import {ArivalCart} from '../ArivalCart';
import { Arival_Feature } from "../../CONSTAINTS";
 const Part = () => {
  const PartItems=Arival_Feature.filter((items)=>items.id>=10 &&items.id<=23);
  return (
     <div>
      <nav className="pb-12"><Nav/></nav>
      <div className="mt-12 mx-5">
        <h1 className="font-montserrat font-extrabold text-[80px] max-md:text-[50px]">PARTS</h1>
         <div className='grid grid-col xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 grid-cols-1 mt-16 justify-items-center'>
          {
            PartItems.map((feature)=>
            (
              <ArivalCart key={feature.id} {...feature}   />
            ))
          }
        </div>
      </div>
        <div className="mt-10"><Subscribe/></div>
        <div className="bg-black mt-10 px-5 py-5"><Footer/></div>
    </div>
  )
}

export default Part