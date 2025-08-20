import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectCard";
import local from "./ProData"; 

const ViewProjects = () => {

  return (
    <section className="w-full py-20">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="ALL PROJECTS" des="Explore My Full Portfolio" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {local.length > 0 ? (
          local.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              src={project.src}
              link={project.link}
              github={project.github}
              des={project.des}
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

export default ViewProjects;
