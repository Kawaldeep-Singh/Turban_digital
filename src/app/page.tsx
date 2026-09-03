import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[10px]">
        <Hero />
        <Process />
        <Services />
        <Pricing />
        <Team />
        <Contact />
        <Stats />
        <Footer />
      </main>
    </>
  );
}
