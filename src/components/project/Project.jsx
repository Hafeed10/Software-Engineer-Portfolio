import React from 'react'
import Title from '../layouts/Title'
import { projectOne,projectTwo5,projectTwo6, projectTwo7, projectTwo,projectTwo4, projectTwo1,projectTwo2,projectTwo3 } from "../../assets/index";
import ProjectsCard from '../project/ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="NetFlix Website"
          des=" Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Product Listings: Displays items with images, descriptions, prices, and reviews.Shopping Cart: Users can add items to a cart and review them before purchasing."
          src={projectTwo}
        />
        <ProjectsCard
          title="WORLD_TOUR APP"
          des=" The DP World Tour Championship is a golf tournament on the European Tour and is the climax of the Race to Dubai. It is contested on the Greg Norman-designed Earth course at the Jumeirah Golf Estates in Dubai, United Arab Emirates. The title sponsor is DP World, based in Dubai.!"
          src={projectTwo1}
        />
        <ProjectsCard
          title="BLOG APP"
          des=" Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.!"
          src={projectTwo2}
        />
        <ProjectsCard
          title="pathc Website"
          des=" A patch website refers to a site that offers patches, updates, or fixes for software, games, or applications. These patches are typically released by developers to address bugs, add new features, or improve security.!"
          src={projectTwo3}
        />
        <ProjectsCard
          title="Venom  Website"
          des=" Snake venoms are complex mixtures of enzymes and proteins of various sizes, amines, lipids, nucleosides, and carbohydrates. Venoms also contain various metal ions that are presumed to act as cofactors and include sodium, calcium, potassium, magnesium, and zinc!"
          src={projectTwo4}
        />
        <ProjectsCard
          title="Bitbucket  Website"
          des=" Bitbucket is a Git-based source code repository hosting service owned by Atlassian. Bitbucket offers both commercial plans and free accounts with an unlimited number of private repositories. Bitbucket. Bitbucket Logo. Type of site!"
          src={projectTwo5}
        />
        <ProjectsCard
          title="weather-App"
          des=" The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to ten days in future and hourly weather forecast!"
          src={projectTwo6}
        />
        <ProjectsCard
          title="Tovino_Movies  Website"
          des=" ovino Thomas is an Indian actor and film producer who predominantly works in Malayalam films. He made his debut in 2012 with the film Prabhuvinte Makkal. His breakthrough roles were in the films ABCD, 7th Day and Ennu Ninte Moideen. He starred as the titular character in the Netflix superhero film Minnal Murali!"
          src={projectTwo7}
        />
      </div>
    </section>
  );
}

export default Projects