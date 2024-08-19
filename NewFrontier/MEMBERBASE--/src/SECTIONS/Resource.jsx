

export const Resource = () => {
  return (
    <section className="max-container padding flex justify-center items-center flex-1 flex-wrap bg-red-50 w-full flex-col gap-5">
      <h2 className="font-montserrat font-bold text-4xl">Get more great resources</h2>
      <h5 className="max-md:hidden  font-montserrat text-2xl text-center">
      Get the latest design resources from across the web.<br />
    <span className="block mx-auto">Straight to your inbox.</span>
      </h5>
        <h5 className="max-md:block hidden font-montserrat text-2xl ">
      Get the latest design resources from across the web.Straight to your inbox.
      </h5>

      <div className="flex flex-1 justify-center items-center gap-4 flex-col lg:flex-row max-md:w-full">
      <input className="px-10 py-2 font-palanquin rounded-lg w-full" type="text" placeholder="Enter your email" />
      <button className="font-palanquin px-7 bg-black text-white py-2 w-full rounded-lg">Subscribe</button>
      </div>
    </section>
  )
}

export default Resource