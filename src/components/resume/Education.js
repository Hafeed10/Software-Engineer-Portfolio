import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10"
    >
      {/* Education Section */}
      <section className="w-full lg:w-1/2 p-2 rounded-2xl shadow-md">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-4">
          <ResumeCard
            title="BCA - Bachelor of Computer Applications"
            company="Indira Gandhi National Open University"
            subTitle="2023 - 2025"
            result="4/5"
            des="Studying computer science fundamentals, software development, and IT concepts to prepare for professional roles in technology and software engineering."
          />
          <ResumeCard
            title="STEYP - Technology & Information"
            company="Steyp Digital University"
            subTitle="2023 - 2024"
            result="5/5"
            des="Completed a digital program focused on advanced computer engineering, modern web technologies, and real-world hands-on projects."
          />
          <ResumeCard
            title="CYRA - Flutter Development Program"
            company="CYRA Digital Training"
            subTitle="2024"
            result="5/5"
            des="Completed a Flutter development program, focusing on cross-platform application design. Gained expertise in building mobile, web, and desktop apps from a single Dart-based codebase."
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full lg:w-1/2 p-2 rounded-2xl shadow-md">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-4">
          <ResumeCard
            title="Freelancer"
            company="Remote / Self-employed"
            subTitle="2023 - 2025"
            subeTitle="Full-Stack Web Developer"
            result="5/5"
            des="Worked collaboratively with designers, developers, and clients in remote settings, ensuring seamless project execution."
          />
          <ResumeCard
            title="Trizo Creatives Developer"
            company="Trizo Creatives"
            subeTitle="React Developer"
            subTitle="2023 - 2024"
            result="5/5"
            des="Developed and optimized user interfaces using React.js, collaborated with cross-functional teams, and implemented responsive, pixel-perfect designs for client projects."
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
