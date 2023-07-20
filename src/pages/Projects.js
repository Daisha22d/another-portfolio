import React from "react";
import { Link } from "react-router-dom";
import "../pages/Projects.css";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of my projects:</p>
            <ul>
                <li>
                    <Link to="/projects/1">Project 1</Link>
                </li>
            </ul>
        </div>
    )
};

export default Projects;
