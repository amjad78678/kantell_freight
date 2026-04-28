import Hero from "../components/Hero";
import About from "../components/About";
import ImageBand from "../components/ImageBand";
import Services from "../components/Services";
import GlobalNetwork from "../components/GlobalNetwork";
import WhyUs from "../components/WhyUs";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ImageBand />
      <Services />
      <GlobalNetwork />
      <WhyUs />
      <Stats />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
