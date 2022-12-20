import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css'
import '../styles/Projects.css'

function Projects() {
  return(
    <div>
      <Header />
      <div
      className="title-text">
        <h1>Projects</h1>
      </div>
      <div
        className="projects">
        <p>
          Here are some of the Projects
        </p>
        <p>
          that I have worked on
        </p>
      </div>
      <Footer />
    </div>
    );
};

export default Projects;