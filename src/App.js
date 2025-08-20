import React from "react";
import { Routes, Route } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import ViewProjects from "./components/project/ViewProjects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Features />
                <Projects />
                <Resume />
                <Testimonial />
                <Contact />
              </>
            }
          />

          {/* View Project Page */}
          <Route path="/viewprojects" element={<ViewProjects />} />
        </Routes>

        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
