import React from "react";
import { Link } from "react-router-dom";
import "../pages/Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Projects = () => {
  return (
    <div className="container">
      <div className="proj-container">
        <h2 className="project-heading">Projects</h2>
        <p>Here are some of my projects:</p>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="project-item">
              <a
                href="https://chatbot-00-eac25725f44b.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robo Bot - Assistant Chatbot
              </a>
              <p>
                An assistant bot that you can ask anything for help. Type a
                question and press send, and the bot will reply. Refresh the
                page to clear the conversation. Developed using Flask and
                deployed on Heroku. Utilized the OpenAI API.
              </p>
              <p>
                My role: Designed and developed this app using Flask and
                deployed on Heroku. I used the OpenAI API.
              </p>
              <p>Technologies: Flask, Python, HTML, CSS, Heroku</p>
              <a
                href="https://github.com/Daisha22d/probable-guacamole"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robo Bot Repo
              </a>
            </div>
          </li>
          <li className="list-group-item">
            <div className="project-item">
              <a
                href="https://daisha22d.github.io/py-quiz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python Mini Quiz
              </a>
              <p>
                A quiz app that tests users' Python knowledge with a few
                beginner-friendly questions.
              </p>
              <p>
                My role: Designed and developed this app using React and
                deployed on Github Pages
              </p>
              <p>Technologies: React, JSX, CSS, Github Pages</p>
              <a
                href="https://github.com/Daisha22d/py-quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mini Quiz Repo
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

// const Projects = () => {
//     return (
//         <div className="proj-container">
//             <strong className="project-heading">Projects</strong>
//             <p>Here are some of my projects:</p>
//             <ul>
//                 <li>
//                     <a href="https://chatbot-00-eac25725f44b.herokuapp.com/" target="_blank" rel="noopener noreferrer">
//                         Robo Bot - Assistant Chatbot
//                     </a>
//                     <p>
//                         An assistant bot that you can ask anything for help. Type a question and press send, and the bot will reply.
//                         Refresh the page to clear the conversation. Developed using Flask and deployed on Heroku. Utilized the OpenAI API.
//                     </p>
//                     <p>Technologies: Flask, Python, HTML, CSS, Heroku</p>
//                 </li>
//                 <li>
//                     <a href="https://github.com/Daisha22d/probable-guacamole" target="_blank" rel="noopener noreferrer">
//                         GitHub
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://daisha22d.github.io/py-quiz/" target="_blank" rel="noopener noreferrer">
//                         Python Mini Quiz
//                     </a>
//                     <p>
//                         A quiz app that tests users' Python knowledge with a few beginner-friendly questions.
//                     </p>
//                     <p>My role: Designed and developed this app using React and deployed on Github Pages</p>
//                     <p>Technologies: React, JSX, CSS, Github Pages</p>
//                 </li>
//                 <li>
//                     <a href="https://github.com/Daisha22d/py-quiz" target="_blank" rel="noopener noreferrer">
//                         GitHub Repo
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Projects;
