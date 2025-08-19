import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from '../project/ProjectCard';
import './Project.css';

const Projects = () => {
  // Local project data
  const localProjects = [
    {
      title: "Powersaff Ecommerce",
      src: "https://themefisher.com/blog-thumb/e-commerce-website-admin-panel-templates.webp",
      link: "https://powersaff.in/",
      github: "https://github.com/Hafeed10/powersaff-ecommerce"
    },
    {
      title: "Books App",
      src: "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063081.jpg",
      link: "https://books-app-roan-omega.vercel.app/",
      github: "https://github.com/Hafeed10/Books-App"
    },
    {
      title: "Ecommerce Website",
      src: "https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg",
      link: "#",
      github: "https://github.com/Hafeed10/Full-Stack-Ecommerce-Website"
    },
    {
      title: "Fashion Style",
      src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3Vwd2s2MTg0MzM0NC13aWtpbWVkaWEtaW1hZ2UtbGtocWw2YWIuanBn.jpg",
      link: "https://fashion-style-lac.vercel.app/",
      github: "https://github.com/Hafeed10/Fashion-Style"
    },
    {
      title: "AI Chatbot",
      src: "https://media.istockphoto.com/id/1465545513/photo/chatbot.jpg?s=612x612&w=0&k=20&c=3IZrVSv95FmcHt744wvcvZiml1LXTnEQimq_3V5CCbQ=",
      link: "https://ai-chatbot-phi-two.vercel.app/",
      github: "https://github.com/Hafeed10/Ai-Chatbot"
    },
    {
      title: "Education AI Bot",
      src: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg",
      link: "https://education-ai-bot.vercel.app/",
      github: "https://github.com/Hafeed10/Education-Ai-Bot"
    },
  ];

  return (
    <section id="projects" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {localProjects.length > 0 ? (
          localProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              src={project.src}
              link={project.link}     // live demo
              github={project.github} // GitHub repo
              des={project.des}       // optional
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No projects available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
