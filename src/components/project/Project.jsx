import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Title from '../layouts/Title';
import ProjectsCard from '../project/ProjectCard';
import './Project.css';

// Assets for local projects
import {
  projectOne, 
  projectTwo3, projectTwo4,
} from '../../assets/index';

// Data for external projects
import { project as externalProjects } from './ProjectData';

const Projects = () => {
  // Local project data
  const localProjects = [
    {
      title: "NetFlix",
      src: projectOne,
    },
    {
      title: "Powersaff-Ecommerce ",
      src: "https://themefisher.com/blog-thumb/e-commerce-website-admin-panel-templates.webp",
    },
    {
      title: "World Tour App",
      src:"https://media.istockphoto.com/id/505018708/vector/concept-of-the-world-adventure-travel.jpg?s=612x612&w=0&k=20&c=TeSuBv228r6vrxH5OH-EQIWU4LLx6brii-4GzzFPaoo=",
    },
    {
      title: "Patch ",
      src: projectTwo3,
    },
    {
      title: "Venom ",
      src: projectTwo4,
    },
    {
      title: "Bitbucket",
      src: "https://www.cybereason.com/hubfs/bitbucket-blog-image.png",
    },
    
    {
      title: "Tovino Movies ",
      src:"https://www.pinkvilla.com/images/2024-08/775421139_arm-trailer.jpg",
    },
  ];

  // Swiper configuration
  const swiperConfig = {
    effect: "slide",
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
    breakpoints: {
      480: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  // Combine local and external project data for display
  const projectLists = [localProjects, externalProjects];

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>

      {projectLists.map((projectList, idx) => (
        <Swiper key={idx} {...swiperConfig} className="mt-10">
          {projectList.length > 0 ? (
            projectList.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectsCard
                  title={project.title}
                  src={project.src}
                />
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-gray-500">No projects available at the moment.</p>
          )}
        </Swiper>
      ))}
    </section>
  );
};

export default Projects;
