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
        <h1>Projetos</h1>
      </div>
      <div
        className="projects">
        <p>
          Projetos no qual eu trabalhei
        </p>
      </div>
      <div
      className="projects-list">
        <img className="proj" id="allForOne" alt="allForOne results"/>
        <img className="proj" id="oneForAll" alt="oneForAll results"/>
      </div>
      <Footer />
    </div>
    );
};

export default Projects;