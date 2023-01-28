import React from 'react';
import Project from './Project';
import projects from '../../data/projects';

const Projects = () => (
  <div className="flex flex-col gap-16">
    {
      projects.map((project) => (
        <Project project={project} key={project.title} />
      ))
    }
  </div>
);

export default Projects;
