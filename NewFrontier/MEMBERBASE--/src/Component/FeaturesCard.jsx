

export const FeaturesCard = ({imgURL,title,topic,description}) => {
  return (
    <div className="flex justify-items-center flex-1 flex-col w-full max-sm:w-full transition duration-300 hover:-translate-y-2">
      <img src={imgURL} alt="image" className="mt-10" />
      <p className="text-slate-gray font-palanquin mt-5 text-lg">{title}</p>
      <h3 className="font-montserrat font-bold text-3xl leading-[1.5] mt-3">{topic}</h3>
      <p className="mt-5 font-montserrat text-lg text-slate-gray leading-[1.5] ">{description}</p>
    </div>
  )
}

export default FeaturesCard