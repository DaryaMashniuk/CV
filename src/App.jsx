import "./App.css";
import { PROJECTS } from "./utils/CONSTANTS.JS";
import Project from "./components/Project";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="profile-name">
          <h1> Mashnyuk Darya </h1>
          <h2> Web developer</h2>
        </div>
        <div className="profile-picture">
          <img src="assets/Profile.jpg" alt="Profile Picture"></img>
        </div>
      </div>
      <div className="container">
        <div className="work">
          <h3> Work experience </h3>
          <p>
          I am a student at Belarusian State University, Faculty of Mechanics and Mathematics and a freelance web developer. I focus on building efficient, user-oriented applications that enhance user
            experience. I am continuously honing my skills in web development and actively seeking opportunities to
            innovate and grow in this dynamic field. My commitment to excellence drives me to deliver high-quality work
            that meets client needs and exceeds expectations.
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
            <div className="skills">
              <h3>Skills</h3>
              <div className="skillsDesc">
                <div className="frontend">
                  <p>Frontend</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>TailwindCss</li>
                  </ul>
                </div>
                <div className="backend">
                  <p>Backend</p>
                  <ul>
                    <li>NodeJs</li>
                    <li>Java</li>
                  </ul>
                </div>

                <div className="database">
                  <p>DataBases</p>
                  <ul>
                    <li>SQL</li>
                    <li>MySql</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="other">
                  <p>Other</p>
                  <ul>
                    <li>Git</li>
                    <li>Figma</li>
                    <li>npm</li>
                  </ul>
                </div>
              </div>
            
            </div>  
            <div className="tg">
                <img src="assets/telegram.png" width='25px'></img>
                <a href="https://t.me/Darya_Mash">@Darya_Mash</a>
              </div>
          </div>

          <div className="projects">
            <h3>Projects</h3>
            {PROJECTS.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
