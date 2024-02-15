import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import HeadShot from "../images/headshot.png";
import "../pages/Home.css";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container">
      <div className="row">
        {isMobile ? (
          // Render content in a single column for mobile screens
          <div className="col-12">
            <div className="introContainer">
              <h1 className="text-h1">Hi, I'm Daisha</h1>
              <p className="p1">
                <b>
                  I'm an analyst with a passion for using technology
                  to solve real-world problems.
                </b>
              </p>
              <p className="p2">
                <b>
                  I'm skilled in a variety of programming languages and
                  technologies and I'm also a blogger on
                  Medium{" "}
                  <a
                    className="medium-link"
                    href="https://medium.com/@daishadeniz"
                  >
                    medium.com/@daishadeniz
                  </a>
                  , where I write about personal development and other
                  topics that inspire and uplift others.
                </b>
              </p>
              <p className="email">
                <b>
                  Email me at{" "}
                  <a className="email-link" href="mailto:daishadeniz@gmail.com">
                    daishadeniz@gmail.com
                  </a>
                </b>
              </p>
            </div>
          </div>
        ) : (
          // Render content in two columns for larger screens
          <>
            <div className="col-md-6">
              <div className="introContainer">
                <h1 className="text-h1">Hi, I'm Daisha</h1>
                <p className="p1">
                  <b>
                  I'm an analyst with a passion for using technology
                  to solve real-world problems.
                  </b>
                </p>
                <p className="p2">
                  <b>
                  I'm skilled in a variety of programming languages and
                  technologies and I'm also a blogger on
                  Medium{" "}
                  <a
                    className="medium-link"
                    href="https://medium.com/@daishadeniz"
                  >
                    medium.com/@daishadeniz
                  </a>
                  , where I write about personal development and other
                  topics that inspire and uplift others.
                  </b>
                </p>
                <p className="email">
                  <b>
                    Email me at{" "}
                    <a
                      className="email-link"
                      href="mailto:daishadeniz@gmail.com"
                    >
                      daishadeniz@gmail.com
                    </a>
                  </b>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="profilePicContainer"
                style={{ marginTop: "80px" }}
              >
                <img src={HeadShot} alt="profile pic" className="profilePic" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
