import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-scroll";
import HeadShot from "../images/headshot.JPG";
import "../pages/Home.css"; 

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define mobile breakpoint (adjust as needed)

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
                  I'm passionate about learning and advancing my skills to share
                  what I've learned with others.
                </b>
              </p>
              <p className="p2">
                <b>
                  I recently completed the Georgia Tech coding bootcamp for full
                  stack development, and I am thrilled to be a part of this
                  dynamic and innovative industry. Technology is rapidly shaping
                  every field, and I'm excited to contribute my skills and
                  knowledge to create a better future through tech.
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
                    I'm passionate about learning and advancing my skills to share
                    what I've learned with others.
                  </b>
                </p>
                <p className="p2">
                  <b>
                    I recently completed the Georgia Tech coding bootcamp for full
                    stack development, and I am thrilled to be a part of this
                    dynamic and innovative industry. Technology is rapidly shaping
                    every field, and I'm excited to contribute my skills and
                    knowledge to create a better future through tech.
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
            <div className="col-md-6">
              <div className="profilePicContainer" style={{ marginTop: "80px" }}>
                <img
                  src={HeadShot}
                  alt="profile pic"
                  className="profilePic"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import HeadShot from "../images/headshot.JPG";
// import { useMediaQuery } from 'react-responsive';
// import "../pages/Home.css"; 


// const Home = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="introContainer">
//             <h1 className="text-h1">Hi, I'm Daisha</h1>
//             <p className="p1">
//               <b>
//                 I'm passionate about learning and advancing my skills to share
//                 what I've learned with others.
//               </b>
//             </p>
//             <p className="p2">
//               <b>
//                 I recently completed the Georgia Tech coding bootcamp for full
//                 stack development, and I am thrilled to be a part of this
//                 dynamic and innovative industry. Technology is rapidly shaping
//                 every field, and I'm excited to contribute my skills and
//                 knowledge to create a better future through tech.
//               </b>
//             </p>
//             <p className="email">
//               <b>
//                 Email me at{" "}
//                 <a className="email-link" href="mailto:daishadeniz@gmail.com">
//                   daishadeniz@gmail.com
//                 </a>
//               </b>
//             </p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="profilePicContainer" style={{ marginTop: "20%" }}>
//             <img
//               src={HeadShot}
//               alt="profile pic"
//               className="profilePic"
//               style={{ position: "absolute" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


