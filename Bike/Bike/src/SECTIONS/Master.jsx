import {Footer} from './Footer';
import {Explore} from './Explore';
import {Subscribe} from './Subscribe';
import {Arival} from './Arival';
import {Hero} from './Hero';
import {Nav} from './Nav';
export default function Master() {
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