import Button from "../Component/Button";



const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container  flex justify-between item-center max-lg:flex-col gap-10">
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md ">Sign Up from
        <span className="text-coral-red "> Updates
        </span>& Newsletter  </h3>
      <div className="  grid grid-cols-1 items-center">
        <div className="flex max-md:w-full  justify-start p-3 gap-3  max-md:flex-col sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input"/>
        <Button   label="Sign Up" fullwidth/>
        </div>
      </div>


    </section>
  )
}

export default Subscribe
