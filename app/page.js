import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconRow from "@/components/IconRow";
import WhoWeAre from "@/components/WhoWeAre";
import Transform from "@/components/Transform";
import WhatWeOffer from "@/components/WhatWeOffer";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IconRow />
        <WhoWeAre />
        <Transform />
        <WhatWeOffer />
        <Stats />
        <WhyChooseUs />
        <Pricing />
        <Cta />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
