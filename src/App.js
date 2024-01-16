import React from "react";
import Banner from "../src/components/banner/Banner";
import Contact from "../src/components/contact/Contact";
import Features from "../src/components/features/Features";
import Footer from "../src/components/footer/Footer";
import FooterBottom from "../src/components/footer/FooterBottom";
import Navbar from "../src/components/navbar/Navbar";
import Projects from "../src/components/project/Project";
import Resume from "../src/components/resume/Resume";
import Testimonial from "../src/components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;