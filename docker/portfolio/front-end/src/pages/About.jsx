import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css'
import '../styles/About.css'

function About() {
  return(
    <div>
      <Header />
      <div
      className="title-text">
        <h1>About Me</h1>
      </div>
      <div
      className="text-div">
        <p
        className="text-paragraph">
          Web developer, studying web development at Trybe. 
          Learning React hooks at the moment, I have knowledge in git, github, HTML, CSS, 
          Jest, React, Redux, Context API, RTL, agile methodologies, Docker and MySql. 
        </p>
        <p
        className="text-paragraph">
          I started learning technology at the beginning of the year 2020 and by the end of the same year 
          I entered the Santa Catarina State University, where I stayed for one year and a half 
          before doing trybe's selective process to join the course.
        </p>
        <p
        className="text-paragraph">
          I worked one year as TI support, providing service to company users, 
          building and doing computer maintenance and managing the company's internal network. 
          My goal as a student is to become a web developer with a wide knowledge in computer science.
        </p>
      </div>
      <Footer />
    </div>
  )
};

export default About;