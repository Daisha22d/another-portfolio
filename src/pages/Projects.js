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
                href="https://github.com/Daisha22d/ollama-loop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ollama in the Loop
              </a>

              <p className="project-paragraph">
                Human Led Decision Flows with Open Source Model Enabled Function
                Calls in Langgraph.
              </p>

              <p className="project-paragraph">
                My role: Forked a Langgraph example and recreated the example.
              </p>

              <p className="project-paragraph">
                Technologies: Jupyter Notebook, Python
              </p>

              <a
                href="https://medium.com/@daishadeniz/empowering-human-led-decision-flows-with-open-source-model-enabled-function-calls-in-langgraph-34c1acf7169d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ollama in the Loop Discussion Paper
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
