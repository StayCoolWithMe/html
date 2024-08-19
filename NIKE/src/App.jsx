import { Hero, CustomerReview, Footer, PopularProduct, Quality, Services, SpecialOffer, Subscribe, Nav } from './SECTIONS/section';

const App = () => (
  <main className="relative">
    <nav>
     <Nav/>
    </nav>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProduct />
    </section>

    <section className="padding">
      <Quality />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="padding bg-black ">
      <Footer />
    </section>

  </main>
);

export default App;
