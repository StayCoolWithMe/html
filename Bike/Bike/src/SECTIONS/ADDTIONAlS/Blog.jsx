import ArivalCart from "../ArivalCart"
import Nav from "../Nav"
import Footer from "../Footer"
import Subscribe from "../Subscribe"
import {Blog_Feature} from '../../CONSTAINTS/index'
import BlogCart from "./BlogCart"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
const Blog = () => {
  const location=useLocation();
  useEffect(()=>{
    window.scroll(0,0);
  },[location])
  return (
    <div className="relative">
      <nav className="pb-12"><Nav/></nav>
      <div className="mt-12">
         <h1 className="font-montserrat px-5 font-extrabold text-[80px] max-md:text-[50px]">BLOG</h1>
          <div className='grid grid-col xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 grid-cols-1 mt-16 justify-items-center'>
          {
           Blog_Feature.map((feature)=>(
            <BlogCart key={feature.id} {...feature}/>
           ))
          }
        </div>
        </div>
      <div className="mt-12"><Subscribe/></div>
      <div className="mt-10 bg-black py-5 px-5"><Footer/></div>
    </div>
  )
}

export default Blog