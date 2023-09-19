import React from "react";
import profileImage from "../assests/profileimg.png";
import "./home.css";
import resume from "../assests/Kulveer's Resume.pdf";

function Home() {
  return (
    <section className="home-page" id="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 profile">
            <img src={profileImage} alt="" className="profileimg" />
          </div>
          <div className="col-md-6">
            <div className="info">
              <p className="front-sec"> Hi, my name is </p>
              <h1 className="name"> Kulveer Singh </h1>
              <h2 className="about-you"> I am a web developer </h2>

              <a class="btn btn-outline-primary" href="#portfolio">
                View Portfolio
              </a>
              <a href="https://drive.google.com/file/d/1qRTHkpjx6WHIUyr43RtrO1Bl4G_zx6nc/view?usp=sharing" class="btn btn-outline-dark" download={resume} >
                GET RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
