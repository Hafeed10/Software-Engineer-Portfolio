import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Title from '../layouts/Title';
import {
  projectOne, projectTwo, projectTwo1, projectTwo2,
  projectTwo3, projectTwo4, projectTwo5, projectTwo6, projectTwo7
} from '../../assets/index';
import ProjectsCard from '../project/ProjectCard';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: "NetFlix Website",
      des: "Netflix is a streaming service that offers a wide variety...",
      src: projectOne,
    },
    {
      title: "E-commerce Website",
      des: "Product Listings: Displays items with images...",
      src: projectTwo,
    },
    {
      title: "WORLD_TOUR APP",
      des: "The DP World Tour Championship is a golf tournament...",
      src: projectTwo1,
    },
    {
      title: "BLOG APP",
      des: "Find out which posts are a hit with Blogger’s built-in...",
      src: projectTwo2,
    },
    {
      title: "Patch Website",
      des: "A patch website refers to a site that offers patches...",
      src: projectTwo3,
    },
    {
      title: "Venom Website",
      des: "Snake venoms are complex mixtures of enzymes...",
      src: projectTwo4,
    },
    {
      title: "Bitbucket Website",
      des: "Bitbucket is a Git-based source code repository...",
      src: projectTwo5,
    },
    {
      title: "Weather-App",
      des: "The weather app also provides atmospheric pressure...",
      src: projectTwo6,
    },
    {
      title: "Tovino_Movies Website",
      des: "Tovino Thomas is an Indian actor and film producer...",
      src: projectTwo7,
    },
  ];

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <Swiper
        effect="slide"
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
        onInit={(swiper) => {
          swiper.navigation.nextEl.classList.add('text-designColor');
          swiper.navigation.prevEl.classList.add('text-designColor');
          swiper.navigation.nextEl.classList.add('no-hover');
          swiper.navigation.prevEl.classList.add('no-hover');
        }}
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectsCard 
                title={project.title} 
                des={project.des} 
                src={project.src} 
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">No projects available at the moment.</p>
        )}
      </Swiper>
    </section>
  );
};

export default Projects;
