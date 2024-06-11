import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import DWMImg from "../public/assets/projects/DWM.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const result = await res.json();
      setProjects(result);
      setProjects;
    } catch (error) {
      setProjects([]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What We&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              repoUrl={project.repoUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
