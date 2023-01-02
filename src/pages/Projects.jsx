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
          Projetos no qual eu trabalhei
        </p>
      </div>
      <div
      className="projects-list">
        <div className="proj" id="allForOne" alt="allForOne results"/>
        <div className="proj" id="oneForAll" alt="oneForAll results"/>
        <div className="proj" id="talkerManager" alt="talker Manager results"/>
        <div className="proj" id="trybeWallet" alt="trybe Wallet"/>
      </div>
      <Footer />
    </div>
    );
};

export default Projects;