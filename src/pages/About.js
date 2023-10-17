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
                  Enthusiastic about tech and making a transition to software
                  engineering, especially in a work culture that embraces
                  diverse backgrounds! Currently, as a Software Engineer Intern
                  at Esync Technologies, I contribute to a team building a Dart
                  and Flutter-based mental health app. My tech journey kicked
                  off with a Software Dev. Certification from Georgia Tech,
                  covering frontend, backend, and agile methodologies. As a
                  former Business Development Rep at Mimi’s Spa, I honed
                  transferable skills in advanced Excel analysis and customer
                  relations, driving a 20% sales boost. My sociology degree from
                  Georgia State enhances my problem-solving approach. Notable
                  projects, like the Mental Health App and contributions to the
                  City of Refuge Hackathon, underscore my commitment to
                  impactful tech solutions. Excited about the industry's support
                  for career switchers, I'm eager to bring my diverse skill set
                  to a full-time Software Engineer role. Let's collaborate and
                  create something extraordinary! 
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
