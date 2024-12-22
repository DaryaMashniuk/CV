import React from 'react';
import { PROJECTS } from "../utils/CONSTANTS.JS";
import project from './project';

function Projects(props) {
    console.log(project)
    return (
        <>
          {PROJECTS.map((project)=> {
            <project
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            />
          })}  
        </>
    );
}

export default Projects;