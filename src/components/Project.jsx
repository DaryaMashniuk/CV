import React from "react";

function Project({title,description,image,link,technologies}) {
  return (
    <div className="project">
      <a href={link} target="_blank">
      <h4>{title}</h4>
      <div className="projectDesc">
        <p>
          {description}
        </p>
        <img src={image}></img>
      </div>
      <p className="technologies"><span className="tech">Technologies: </span>{technologies}</p>
      </a>
    </div>
  );
}

export default Project;
