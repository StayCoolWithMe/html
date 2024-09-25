import Nav from "../Nav";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { EentHero } from '../../assets/images/index';

const Event = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scroll(0,0);
  },[location])
  return (
    <div className="relative">
      <nav className="pb-12 "><Nav/></nav>
      <div className="mt-12 px-5">
        <section
          className="py-5 z-2 mt-16 relative padding-x max-container w-full min-h-screen bg-slate-400"
          style={{
            backgroundImage: `url(${EentHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
        >
          <h1 className="font-extrabold font-montserrat max-sm:text-3xl text-4xl absolute top-0 left-0 m-5 z-10 text-white">EVENTS</h1>
          <h5 className="font-montserrat absolute right-3 z-10  text-white font-extrabold text-2xl max-md:text-sm max-md:left-2 max-md:right-0  bottom-5">IMMERSE YOURSELF IN THE WORLD OF CYCLING!</h5>
        </section>
      </div>
      <div className=" px-5 mt-10">
              <div className="flex flex-1 flex-row flex-wrap justify-between items-center max-xl:items-start max-xl:flex-col border-b-2 pb-8">
                <p className="font-montserrat text-gray-400 text-sm">Jul 25 - Jul 28, 2024<br/>Reeth<br/>DL11 6SZ Richmond<br/>United Kingdon</p>
                <p><span className="font-montserrat text-3xl font-bold  ">Passo Coppi: Ard Rock</span><br/>
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">9:00am - 3:00pm</button> 
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">Enduro </button>
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">Road</button> </p>
              </div>

                <div className=" mt-6 flex flex-1 flex-row flex-wrap gap-5 justify-between items-center max-xl:items-start max-xl:flex-col border-b-2 pb-8">
                <p className="font-montserrat text-gray-400 text-sm">Jul 30, 2024<br/>Kingdom Park, 80<br/>4910 Lenzerheide<br/>Switzerland</p>
                <p><span className="font-montserrat text-3xl font-bold  ">Sonnex Test Ride</span><br/>
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">9:00am - 4:00pm</button> 
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">Gravel </button>
                 </p>
              </div>

              
                <div className=" mt-6 flex flex-1 flex-row flex-wrap gap-5 justify-between items-center max-xl:items-start max-xl:flex-col border-b-2 pb-8">
                <p className="font-montserrat text-gray-400 text-sm">Aug 15 - Aug 17, 2024<br/>Missano World Circuit<br/>47843 Missano Adriatico<br/>Italy</p>
                <p><span className="font-montserrat text-3xl font-bold  ">Italian Bike Festival</span><br/>
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">10:00am - 7:00pm</button> 
                <button className="mr-3 max-md:mt-5 font-semibold border-black rounded-xl border-2 px-2">Experience </button>
                 </p>
              </div>

              
                <div className=" mt-6 flex flex-1 flex-row flex-wrap gap-5 justify-between items-center max-xl:items-start max-xl:flex-col border-b-2 pb-8">
                <p className="font-montserrat text-gray-400 text-sm">Aug 27, 2024<br/>Eichen Platz<br/>3210 Verbier<br/>Switzerland</p>
                <p><span className="font-montserrat text-3xl font-bold  ">Sonnex Test Ride</span><br/>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">9:00am - 4:00pm</button> 
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">MTB </button>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">All Levels</button>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">Kids</button> </p>
              </div>

              
                <div className=" mt-6 flex flex-1 flex-row flex-wrap gap-5 justify-between items-center max-xl:items-start max-xl:flex-col border-b-2 pb-8">
                <p className="font-montserrat text-gray-400 text-sm">Sep 08, 2024<br/>1196 BD de la Mer<br/>83600 Frejus<br/>France</p>
                <p><span className="font-montserrat text-3xl font-bold  ">Roc D'Azur</span><br/>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">9:00am - 6:00pm</button> 
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">Experience </button>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">Test Rides</button> </p>
              </div>

              
                <div className=" mt-6 flex flex-1 flex-row flex-wrap gap-5 justify-between items-center max-xl:items-start max-xl:flex-col border-b-2 pb-8">
                <p className="font-montserrat text-gray-400 text-sm">Sep 27, 2024<br/>The Truman Brewery<br/>E1 6QR London<br/>United Kingdon</p>
                <p><span className="font-montserrat text-3xl font-bold  ">Rouler Live</span><br/>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">10:00am - 4:00pm</button> 
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">Enduro </button>
                <button className="mr-3 max-md:mt-3 font-semibold border-black rounded-xl border-2 px-2">Road</button> </p>
              </div>
              
          </div>
      
      <div className="mt-10"><Subscribe/></div>
      <div className="mt-10 bg-black px-5 py-5"><Footer/></div>
    </div>
  );
};

export default Event;
