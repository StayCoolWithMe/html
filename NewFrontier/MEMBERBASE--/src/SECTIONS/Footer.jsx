import { member } from "../Doc/images"
import{copyrightSign} from '../Doc/icons/index'
 export const Footer = () => {
  return (
    <footer className="max-container ">
      <div className=" flex flex-row  justify-between items-start max-lg:flex-col max-lg:gap-16">
        <div>
       <img src={member} alt="logo" className=" inline-block m-0 p-0 w-[190px] h-[60px]"/>
       <p className="font-montserrat text-slate-gray text-sm mt-3">Built by Nikolai Bain.</p>
       <p className="font-montserrat text-slate-gray text-sm mt-3">Powered by Webflow.</p>
        <p className="font-montserrat text-slate-gray text-sm mt-3">2022 Memberbase. All Rights Reserved.</p>
        </div>
        <div className="grid grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2 gap-10 mt-3" >
          <div className="flex flex-col">
            <p className="font-bold font-palanquin text-slate-gray">WEBSITE</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Home</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Resources</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Contact</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Ebook(CMS)</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Term & Conditions</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Privancy Policy</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold font-palanquin text-slate-gray">MEMBERBASE</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Sign in</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Sign up</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">User Account</p>
            <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Reset Password</p>
          </div>

          <div className="flex flex-col">
          <p className="font-bold font-palanquin text-slate-gray">ADMIN</p>
          <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Style Guide</p>
          <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">License</p>
          <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Instructions</p>
          <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">Poassword</p>
          <p className="text-slate-gray mt-1 cursor-pointer font-montserrat text-sm">404</p>

         
          </div>

        </div>


    

      </div>

    </footer>
  )
}

export default Footer