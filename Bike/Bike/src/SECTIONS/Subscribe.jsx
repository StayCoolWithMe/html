

export const Subscribe = () => {
  return (
    <div className="py-20 w-full grid grid-cols-1 bg-blue-500">
       
        <div className="flex flex-1 gap-10 flex-wrap items-center">
          <h2 className="px-5 font-palanquin font-extrabold text-2xl text-white ">NEWSLETTER</h2>
          <p className="px-5 font-palanquin text-lg text-white  max-sm:max-w-sm :">Get informed about the best events and special offers only our subscribers have.</p>
        </div>

        <div className="grid grid-cols-5 items-center justify-center max-xl:grid-cols-1">
        
        <input type="text" placeholder="Email" class="mx-5 col-span-4 py-5 px-4 mt-10 text-black font-palanquin text-2xl font-bold border-b-10  border-white rounded-lg bg-gray-100 shadow-md focus:border-blue-500 focus:bg-gray-200 outline-none transition-all"/>
        <button className="font-palanquin border-2 py-5 px-4 mt-10 font-extrabold text-white text-2xl mx-5 rounded-lg transition-transform transform hover:scale-105">
  Sign In
</button>

        </div>


    </div>
  )
}

export default Subscribe