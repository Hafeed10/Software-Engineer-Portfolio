import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education"); // Single state to manage sections

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      {/* Title Section */}
      <div className="flex justify-center items-center text-center">
        <Title title="3+ YEARS OF EXPERIENCE" des="My Port" />
      </div>

      {/* Tabs */}
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Education Tab */}
          <li
            onClick={() => setActiveSection("education")}
            className={`${
              activeSection === "education"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>

          {/* Professional Skills Tab */}
          <li
            onClick={() => setActiveSection("skills")}
            className={`${
              activeSection === "skills"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div>
        {activeSection === "education" && <Education />}
        {activeSection === "skills" && <Skills />}
      </div>
    </section>
  );
};

export default Resume;
