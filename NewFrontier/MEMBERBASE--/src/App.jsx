import { Nav } from "./SECTIONS/index";
import { Hero } from "./SECTIONS/index";
import {Service} from "./SECTIONS/index";
import {Resource} from './SECTIONS/index';
import {Footer} from './SECTIONS/index';


export default function App() {
  return (
  <main className="relative">
    <nav >
      <Nav/>
    </nav>

    <section className="padding-1">
      <Hero/>
    </section>

    <section className="padding">
      <Service/>
    </section>

    <section className="padding-y">
      <Resource/>
    </section>

    <section className="padding">
      <Footer/>
    </section>
  </main>

  )
}