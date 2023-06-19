import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../images/profilepic.jpg';
import './Home.css';

export default function Pic() {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={profilePic} className="card-img" alt="profile pic" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5><strong>About Me</strong></h5>
            <p className="card-text">
              My name is Daisha Drayton, and I'm proud to call Atlanta, GA, my home! As the field of technology constantly evolves, I am fueled by the excitement of embracing the future. I believe that continuous learning is key to staying ahead, which is why the industry is so intriguing to me — each day presents new challenges and opportunities to expand my knowledge. To further enhance my technical skills, I completed the GA Tech Bootcamp, where I honed my abilities and gained hands-on experience. With a bachelor's degree in sociology from Georgia State University, I have also accumulated over 5 years of invaluable experience in customer service, allowing me to connect with individuals from diverse backgrounds and foster meaningful relationships. Besides my passion for technology and problem-solving, there's one thing that never fails to bring a smile to my face — Taco Tuesday! It's a day I look forward to each week because who doesn't love tacos? Now, I'm excited to join a great team and embark on an incredible journey of creating something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}