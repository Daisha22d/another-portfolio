import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/About.css";

const About = () => {
  return (
    <section className="container">
      <div className="row justify-content-center align-items-center about-container">
        {" "}
        {/* Add the 'about-container' class here */}
        <div className="col-md-8">
          <h1>
            <strong className="about-heading">About Me</strong>
          </h1>
          <p className="card-text">
            My name is Daisha Drayton, and I'm proud to call Atlanta, GA, my
            home! As the field of technology constantly evolves, I am fueled by
            the excitement of embracing the future. I believe that continuous
            learning is key to staying ahead, which is why the industry is so
            intriguing to me — each day presents new challenges and
            opportunities to expand my knowledge. To further enhance my
            technical skills, I completed the GA Tech Bootcamp, where I honed my
            abilities and gained hands-on experience. With a bachelor's degree
            in sociology from Georgia State University, I have also accumulated
            over 5 years of invaluable experience in customer service, allowing
            me to connect with individuals from diverse backgrounds and foster
            meaningful relationships. Besides my passion for technology and
            problem-solving, there's one thing that never fails to bring a smile
            to my face — Taco Tuesday! It's a day I look forward to each week
            because who doesn't love tacos? Now, I'm excited to join a great
            team and embark on an incredible journey of creating something
            extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
