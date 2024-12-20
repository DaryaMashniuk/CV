import "./App.css";
import image from "/src/assets/Rectangle.png";
function App() {
  return (
    <div className="wrapper">
      <h1> Mashnyuk darya </h1>
      <h2> Software Engineer</h2>
      <div className="container">
        <div className="work">
          <h3> Work experience </h3>
          <p>
            Highly capable product manager with 4+ years experience in product management, 12+ years in IT. Got 180% of
            revenue goal in adult-content tech company. Filled the backlog, determined the priority and ROI of features.
            Organized A/B tests. I can work with
          </p>
        </div>
        <div className="AboutMe">
          <div className="left">
            <div className="education">
              <h3>Education</h3>
              <p>Computer Science Bachelor BSU </p>
            </div>
            <div className="languages">
              <h3>Languages</h3>
              <p>English (B2)</p>
              <p>Russian ( Native )</p>
            </div>
          </div>
          <div className="projects">
            <h3>Projects</h3>
            <div className="project">
              <h4>Todo List</h4>
              <div className="projectDesc">
                <p>
                  The Todo List application is a user-friendly task management tool that allows users to create, edit,
                  delete, and mark tasks as completed. It features filters to hide completed tasks, a case-insensitive
                  search for titles and descriptions, and a multi-select filter for task importance.
                </p>
                <img src={image}></img>
              </div>
            </div>
            <div className="project">
              <h4>Todo List</h4>
              <div className="projectDesc">
                <p>
                  The Todo List application is a user-friendly task management tool that allows users to create, edit,
                  delete, and mark tasks as completed. It features filters to hide completed tasks, a case-insensitive
                  search for titles and descriptions, and a multi-select filter for task importance.
                </p>
                <img src={image}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
