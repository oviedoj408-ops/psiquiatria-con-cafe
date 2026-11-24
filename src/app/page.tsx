
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Credentials from "@/components/sections/Credentials";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";


import FloatingContactBar from "@/components/common/FloatingContactBar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <About />
      
      
      <Credentials />
      <Services />
      <Pricing />
      
      <Resources />
      <Contact />
      <Footer />
      <FloatingContactBar />
    </main>
  );
}
