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
          <a  className="proj" id="allForOne"
            href="https://github.com/Peterson-Paganelli/mysql-all-for-one"> </a>
          <a  className="proj" id="oneForAll" 
            href="https://github.com/Peterson-Paganelli/mysql-one-for-all"> </a>
        </div>

        <div className="column">
          <a className="proj" id="talkerManager" 
            href="https://github.com/Peterson-Paganelli/Talker-Manager"> </a>
          <a className="proj" id="trybeWallet" 
            href="https://trybe-wallet-kappa.vercel.app/"> </a>
        </div>

      </div>
      <Footer />
    </div>
    );
};

export default Projects;