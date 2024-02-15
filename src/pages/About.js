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
                  Passionate about technology and creating solutions for
                  real-world problems. Recently, I served as a software engineer
                  intern at Esync Technologies, contributing to a mobile mental
                  health app built with Dart and Flutter. My programming journey
                  began at Georgia Tech's coding bootcamp, where I developed
                  skills in several programming languages and agile
                  methodologies. With a sociology degree from Georgia State, I
                  bring strong interpersonal abilities and a user-centered
                  perspective to problem-solving. My work on impactful projects
                  like the mental health app and participation in the City of
                  Refuge Hackathon demonstrate my commitment to utilizing
                  technology for positive change. I am excited to collaborate
                  and innovate in the tech field by applying my diverse
                  background and skills to build something extraordinary!
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
