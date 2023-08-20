import React from "react";
import { Link } from "react-router-dom";
import "../pages/Projects.css";

const Projects = () => {
    return (
        <div className="proj-container">
            <strong className="project-heading">Projects</strong>
            <p>Here are some of my projects:</p>
            <ul>
                <li>
                    <Link to="https://github.com/Daisha22d">GitHub</Link>
                </li>
            </ul>
        </div>
    )
};

export default Projects;
