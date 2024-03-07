import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/About.css";

const About = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card">
            <div className="card-body">
              <h1 className="about-heading text-center">About Me</h1>
              <div className="mb-4">
                <p className="description">
                  I am currently on track for admission into a Data Science
                  Master's program, driven by my passion for programming and
                  problem-solving. My journey began at Georgia Tech's coding
                  bootcamp, where I gained skills in several programming
                  languages and agile methodologies. With a background in
                  sociology from Georgia State University, I bring not only
                  technical proficiency but also strong interpersonal abilities
                  and a user-centered perspective to the table. I'm eager to
                  join a dynamic team where I can share my fresh ideas, learn
                  from experienced professionals, and contribute to building
                  something truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
