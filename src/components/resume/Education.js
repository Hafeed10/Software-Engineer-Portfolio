import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA in Bachelor of Computer Applications"
            subTitle="Indira Gandhi National Open University (2023 - 2025)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="STEYP- Technology & Information"
            subTitle="Tech Degree (2023 - 2024)"
            result="4.75/5"
            des="Steyp is a Digital University for students to learn and become Computer Engineers and Tech Scientists irrespective of their age or educational background."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kombam Secondary School (2009 - 2019)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Null - None</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Coming Soon.."
            // subTitle=" In Working - (2024 - Present)"
            result="soon"
            // des="popular destination with a growing  care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Coming Soon.."
            // subTitle=" In Working - (2024 - Present)"
            result="soon"
            // des="popular destination with a growing  care deeply about their teams and the people who make them up."
          />
         <ResumeCard
            title="Coming Soon.."
            // subTitle=" In Working - (2024 - Present)"
            result="soon"
            // des="popular destination with a growing  care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education