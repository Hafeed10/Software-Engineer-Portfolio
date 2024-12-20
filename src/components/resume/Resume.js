import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

// If images are imported, you can do so like this:
import certificateImage1 from "../../assets/certificet/imag1.jpg";
import certificateImage2 from "../../assets/certificet/img2.jpg";
import certificateImage3 from "../../assets/certificet/img3.jpg";
import certificateImage4 from "../../assets/certificet/img4.jpg";
import certificateImage5 from "../../assets/certificet/img5.jpg";
import certificateImage6 from "../../assets/certificet/img6.jpg";

const certificates = [
  {
    title: "Flutter Engineer Certification",
    imgSrc: certificateImage6, // Image imported for src folder
  },
  {
    title: "UI Engineer Certification",
    imgSrc: certificateImage1, // Image imported for src folder
  },
  {
    title: "Backend Developer Certification",
    imgSrc: certificateImage2, // Example from public folder
  },
  {
    title: "DevOps Engineer Certification",
    imgSrc: certificateImage3, // Example from public folder
  },
  {
    title: "Web Application Developer Certification",
    imgSrc: certificateImage4, // Example from public folder
  },
  {
    title: "Mobile Application Developer Certification",
    imgSrc: certificateImage5, // Example from public folder
  },
];

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education"); // Single state to manage sections
  const [isCertificateDropdownOpen, setCertificateDropdownOpen] =
    useState(false); // Dropdown state
  const [selectedCertificate, setSelectedCertificate] = useState(null); // For modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const isNormalTime = () => {
    const hour = new Date().getHours(); // Get the current hour (0-23)
    return hour >= 9 && hour <= 17; // Example: Normal time is 9 AM to 5 PM
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setIsModalOpen(false);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      {/* Title Section */}
      <div className="flex justify-center items-center text-center">
        <Title title="3+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      {/* Tabs */}
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {/* Education Tab */}
          <li
            onClick={() => {
              setActiveSection("education");
              setCertificateDropdownOpen(false); // Close dropdown if open
            }}
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
            onClick={() => {
              setActiveSection("skills");
              setCertificateDropdownOpen(false); // Close dropdown if open
            }}
            className={`${
              activeSection === "skills"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>

          {/* Certificate Tab with Dropdown */}
          <li
            onClick={() => {
              setActiveSection("certificate");
              setCertificateDropdownOpen(!isCertificateDropdownOpen); // Toggle dropdown
            }}
            className={`${
              activeSection === "certificate"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi relative flex items-center gap-2`}
          >
            Certificate
            {isCertificateDropdownOpen ? (
              <IoIosArrowDropup />
            ) : (
              <IoIosArrowDropdown />
            )}
            {/* Dropdown Menu */}
            {isCertificateDropdownOpen && (
              <ul className="absolute w-full text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white shadow-lg rounded-lg z-10">
                {certificates.map((cert) => (
                  <li
                    key={cert.title}
                    className="px-4 py-2 flex items-center gap-2 hover:bg-designColor cursor-pointer font-bold"
                    onClick={() => openModal(cert)}
                  >
                    <GoDotFill
                      size={20}
                      className={
                        isNormalTime() ? "text-designColor" : "text-white"
                      }
                    />
                    {cert.title}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Achievement Tab */}
          <li
            onClick={() => {
              setActiveSection("achievement");
              setCertificateDropdownOpen(false); // Close dropdown if open
            }}
            className={`${
              activeSection === "achievement"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievement
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div>
        {activeSection === "education" && <Education />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "certificate" && (
          <div>
            <p className="text-center mt-4">
              Select a certificate to view details.
            </p>
          </div>
        )}
        {activeSection === "achievement" && <Achievement />}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal if user clicks outside the modal content
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal if inside content area
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-center">
              {selectedCertificate.title}
            </h2>
            <img
              src={selectedCertificate.imgSrc}
              alt={selectedCertificate.title}
              className="w-full h-auto mt-4 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
