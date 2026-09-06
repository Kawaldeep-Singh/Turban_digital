import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StartupSupport from "@/components/StartupSupport";
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
      <main>
        <Hero />
        <StartupSupport />
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
