import React from "react";

import Nav from "./Components/Nav";

import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Subscribe,
  SuperQuality,
  Servies,
  SpecialOffer,
} from "./Section";

const App = () => (
  <main className="realtive">
    <Nav />
    {/* hero section */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    {/* popular products */}
    <section className="padding">
      <PopularProducts />
    </section>

    {/* super quality */}
    <section className="padding">
      <SuperQuality />
    </section>

    {/* Service */}
    <section className="padding-x py-10">
      <Servies />
    </section>

    {/* Special offer */}
    <section className="padding">
      <SpecialOffer />
    </section>

    {/* Customer reviews */}

    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>

    {/* news letter */}
    <section className="padding py-16 sm:py-32 w-full ">
      <Subscribe />
    </section>

    {/* footer */}
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
