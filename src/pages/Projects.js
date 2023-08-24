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

        <p className="project-description">Here are some of my projects:</p>

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
              
              <p className="project-paragraph">
                An assistant bot that you can ask anything. Type a 
                question and the bot will reply. 
              </p>
              
              <p className="project-paragraph">
                My role: Developed this app using Flask, deployed on Heroku, and used OpenAI API.
              </p>
              
              <p className="project-paragraph">
                Technologies: Flask, Python, HTML, CSS, Heroku
              </p>
              
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
              
              <p className="project-paragraph">
                A quiz app that tests users' Python knowledge with a few
                beginner-friendly questions.
              </p>
              
              <p className="project-paragraph">
                My role: Designed and developed this app using React and 
                deployed on Github Pages
              </p>
              
              <p className="project-paragraph">
                Technologies: React, JSX, CSS, Github Pages
              </p>
              
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
