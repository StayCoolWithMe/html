

export const ExploreCart = ({imgURl,text}) => {
  return (
    <div className="relative overflow-hidden">
        <img src={imgURl} alt="img" className="object-contain  transition-transform duration-500 hover:scale-110"/>
        <button className="absolute bottom-5 py-3 px-5 font-semibold border-2 rounded-full hover:bg-black hover:text-white hover:border-white  left-5 font-palanquin border-black bg-white border  ">{text}</button>


    </div>
  )
}
