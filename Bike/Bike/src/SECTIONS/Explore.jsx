import {ExploreCart} from '../SECTIONS/ExploreCart';
import {Explores} from '../CONSTAINTS/index'
import {Explore2} from '../CONSTAINTS/index';
import {ExploreCart2} from '../SECTIONS/ExploreCart2';

export const Explore = () => {
  return (
    <div className="grid grid-cols-1 gap-5" >
      {/* text part  */}
      <h1 className="font-palanquin text-4xl mt-10 font-extrabold max-sm:text-[50px] ">EXPLORE</h1>
      
      {/* CART PART */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-6 justify-items-center ">
      {Explores.map((explore)=>(
        <ExploreCart key={explore.text} {...explore}/>
      ))}
      </div>

         {/* ITEM PART2 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:gap-4 gap-6 justify-items-center ">
        {
          Explore2.map((explore2)=>(
            <ExploreCart2 key={explore2.text} {...explore2} />  
          ))
        }

       </div>
    </div>
  );
};

export default Explore;
