import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../images/profilepic.jpg";
import "../pages/Home.css";

const Home = () => {
  return (
    <>
      <div className="introContainer">
        <h1 className="ombre-text">Hi, I'm Daisha</h1>
        <h2 className="ombre-text">I'm passionate about learning and advancing</h2>
        <h3 className="ombre-text">my skills and sharing what I've learned with others.</h3>
      </div>
      <div className="profilePicContainer">
        <img
          src={ProfilePic}
          alt="profile pic"
          className="profilePic"
          style={{ position: "absolute" }}
        />
      </div>
    </>
  );
};

export default Home;
