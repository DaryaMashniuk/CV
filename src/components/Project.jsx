import React from "react";

function project(props) {
  return (
    <div className="project">
      <h4>Todo List</h4>
      <div className="projectDesc">
        <p>
          The Todo List application is a user-friendly task management tool that allows users to create, edit, delete,
          and mark tasks as completed. It features filters to hide completed tasks, a case-insensitive search for titles
          and descriptions, and a multi-select filter for task importance.
        </p>
        <img src={image}></img>
      </div>
    </div>
  );
}

export default project;
