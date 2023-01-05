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
        <h1>Sobre mim</h1>
      </div>
      <div className="sections-div">

        <section className="text-div">
          <h1 className="sub-title">Tecnologias</h1>
          <div className="techs-div">
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MySql</li>
            </ul>
          </div>
        </section>

        <section className="text-div">
          <h1 className="sub-title">Trabalhos anteriores</h1>
          <div className="jobs">
            <h3>Artefama</h3>
            <h3>Suporte em TI</h3>
          </div>
          <div className="jobs">
            <h3>Artefama</h3>
            <h3>Estágiario em TI</h3>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
};

export default About;