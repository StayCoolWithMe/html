
import {copyrightSign} from '../assets/icons/index';

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1  text-white ">
      <div className="grid grid-cols-1 lg:grid-cols-4 mb-10 md:grid-cols-2 sm:grid-cols-1 justify-center items-start">
        <div className="grid grid-cols-1">
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">BIKEAS</h3>
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">GEAR</h3>
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">PARTS</h3>
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">BRAND</h3>
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">OUTLET</h3>
        </div>

        <div className="grid grid-cols-1 max-md:mt-10">
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">EXPLORE</h3>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">About Us</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Services</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Blog</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Event</p>
        </div>

        <div className="grid grid-cols-1 max-md:mt-10 max-md:mb-10">
          <h3 className="font-extrabold text-2xl font-palanquin text-slate-gray hover:text-white">SUPPORT</h3>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">FAQs</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Orders & Shipping</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Returns & Refunds</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Warrenty & Repair</p>
          <p className="font-montserrat mt-2 text-lg text-slate-gray cursor-pointer">Payments</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1">
        <h3 className="font-palanquin text-2xl font-bold text-white">VISIT US</h3>
        <div className="mt-5 ">
          <p className="font-montserrat text-lg text-slate-gray hover:text-white">Kingdom Park, 80</p>
          <p className="font-montserrat text-lg text-slate-gray hover:text-white">4910 Lenzerheide</p>
        </div>
      </div>

      <div className="mt-10 flex flex-1 flex-row gap-10 items-center justify-start max-sm:flex-col max-sm:items-start">
          <button className="border border-white  px-4 py-1 rounded-2xl border-solid ">Open hour</button>
          <div className="flex flex-col">
            <p>Mon-Fri</p>
            <p>10am-7am</p>
          </div>

          <div className="flex flex-col">
            <p>Saturday</p>
            <p>10am-2am</p>
          </div>
        </div>


        <div className='mt-10 flex gap-3'>
        <img src={copyrightSign} alt="sign" />
        <p>Soonex 2024.All right reserve</p>
        </div>
    </footer>
  )
}

export default Footer