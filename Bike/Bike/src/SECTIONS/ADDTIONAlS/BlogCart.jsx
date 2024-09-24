import { Blog_Feature } from "../../CONSTAINTS"

const BlogCart = ({imgURL,text,date,tittle}) => {
  return (
    <div className="py-3  border-2 border-gray-100 px-5 flex flex-1 flex-row flex-wrap relative hover:bg-gray-100 hover:translate-y-[-5px]  transition duration-100">
        
        <img src={imgURL} alt="image" />

        <div className="px-1 ">
            <p className=" font-montserrat text-black mt-5 font-semibold">{text}</p>
            <p className="text-slate-gray font-montserrat text-sm">{date}</p>
            <p className="font-montserrat text-black text-md">{tittle}</p>

        </div>
    </div>
  
  )
}

export default BlogCart