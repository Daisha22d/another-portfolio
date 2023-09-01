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
                  I am a tech enthusiast with experience as a business
                  development representative focused on market research. I am
                  passionate about developing creative solutions to problems and
                  building and nurturing relationships. I am driven by the
                  excitement of embracing the future and believe that continuous
                  learning is the key to staying ahead. I have a bachelor's
                  degree in sociology from Georgia State University, where I
                  learned critical thinking and problem-solving skills, data
                  analysis skills, communication skills, interpersonal skills,
                  and understanding of social trends. I have also completed
                  certifications in software development and generative AI. In
                  my previous role, I was responsible for developing and
                  executing market research strategies, managing client
                  relationships, and delivering insights that helped businesses
                  make informed decisions. I am a proven team leader with a
                  track record of success, and I am confident that I can use my
                  skills and experience to make a significant contribution to
                  your team. I am eager to join a great team and embark on an
                  incredible journey of creating something extraordinary
                  together.
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
