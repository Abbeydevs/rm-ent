import React from "react";
import Hero from "../../components/hero/Hero";
import Artists from "../../components/artists/Artists";
import Events from "../../components/events/Events";
import Explore from "../../components/explore/Explore";
import Shop from "../../components/shop/Shop";
import Newsletter from "../../components/newsletter/Newsletter";
import Social from "../../components/social/Social";
import Footer from "../../components/footer/Footer";

export default function Landing() {
  return (
    <>
      <Hero />
      <Artists />
      <Events />
      <Explore />
      <Shop />
      <Newsletter />
      <Social />
      <Footer />
    </>
  );
}
