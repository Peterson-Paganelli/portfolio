import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css'
import '../styles/projects.css'

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
          Alguns projetos realizados por mim
        </p>
      </div>
      <div
      className="projects-list">

        <div className="column">
          <div className="proj" id="allForOne" alt="allForOne results"/>
          <div className="proj" id="oneForAll" alt="oneForAll results"/>
        </div>

        <div className="column">
          <div className="proj" id="talkerManager" alt="talker Manager results"/>
          <div className="proj" id="trybeWallet" alt="trybe Wallet"/>
        </div>

      </div>
      <Footer />
    </div>
    );
};

export default Projects;