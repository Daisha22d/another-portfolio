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
                    <a href="https://chatbot-00-eac25725f44b.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Robo Bot - Assistant Chatbot
                    </a>
                    <p>
                        An assistant bot that you can ask anything for help. Type a question and press send, and the bot will reply.
                        Refresh the page to clear the conversation. Developed using Flask and deployed on Heroku. Utilized the OpenAI API.
                    </p>
                    <p>Technologies: Flask, Python, HTML, CSS, Heroku</p>
                </li>
                <li>
                    <a href="https://github.com/Daisha22d/probable-guacamole" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Projects;
