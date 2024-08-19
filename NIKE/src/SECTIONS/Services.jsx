import {services} from '../Constaints/index';
import {ServiceCart} from '../Component/ServiceCart';

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9 ">
      {services.map((service)=>(
        <ServiceCart key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services