import {Footer} from '../src/SECTIONS/Footer';
import {Explore} from '../src/SECTIONS/Explore';
import {Subscribe} from '../src/SECTIONS/Subscribe';
import {Arival} from '../src/SECTIONS/Arival';
import {Hero} from '../src/SECTIONS/Hero';
import {Nav} from '../src/SECTIONS/Nav';

export default function App() {
  return (
    <main className="relative">
      <nav><Nav/></nav>
      <section className="xl:padding-1 wide:padding-r border paading-b px-5 max-sm:px-1"><Hero/></section>
      <section className="px-5 mt-10"><Arival/></section>
      <section className="px-5"><Explore/></section>
      <section className="py-10"><Subscribe/></section>
      <section className="padding bg-black"><Footer/></section>
    </main>
  )
}