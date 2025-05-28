import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-10"
    >
      {/* part one */}
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA in Bachelor of Computer Applications"
            company='Only College'
            subTitle="Indira Gandhi National Open University (2023 - 2025)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="STEYP- Technology & Information"
             company='Only Tech Degree'
            subTitle="Tech Degree (2023 - 2024)"
            result="4.75/5"
            des="Steyp is a Digital University for students to learn and become Computer Engineers and Tech Scientists irrespective of their age or educational background."
          />
          <ResumeCard
            title="CYRA- Technology & Information"
            company='Only Tech Degree'
            subTitle="Tech Degree (2024)"
            result="6.00/5"
            des="
              Flutter is an open-source UI software development toolkit created by Google.
              It is used to build natively compiled applications for mobile, web, and desktop
              from a single codebase. Flutter is built using the Dart programming language."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelancer"
            company='Null'
            subTitle="Freelance Working - (2023-2025 - Present) "
            result="5/5"
            des="popular destination with a growing  care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Full Stack Developer"
             company='Powersaff'
            subTitle="Freelance Working - (2024-2025 - Present)"
            result="5/5"
            des="popular destination with a growing  care deeply about their teams and the people who make them up."
          />
         <ResumeCard
            title="React Developer"
            company='Trizo Creatives'
            subTitle="Freelance Working - (2023-2024 - Present)"
            result="5/5"
            des="popular destination with a growing  care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education