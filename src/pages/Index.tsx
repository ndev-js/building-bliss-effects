import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSlider from "@/components/ProjectsSlider";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Vision />
      <WhyChooseUs />
      <ProjectsSlider />
      <About />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
