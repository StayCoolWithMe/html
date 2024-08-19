

 export const ServiceCart = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt={label} className="w-[24px] h-[24px] " />
        </div>
        <h3 className="mt-6 font-montserrat text-3xl font-bold leading-normal">{label}</h3>
        <p className="mt-4 break-words font-montserrat text-lg text-slate-gray leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCart