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
      <div
      className="text-div">
        <p
        className="text-paragraph">
          Estudante de desenvolvimento Web pela Trybe.
          Atualmente estudando Node.js e Express, possuo conhecimentos em Git, 
          Github, HTML, CSS, Javascript, Jest, React, RTL, Metodologias Ágeis, 
          Redux, Context API, Docker, mySql, Node.js, Express.
        </p>
        <p
        className="text-paragraph">
          Comecei a estudar desenvolvimento de software no começo do ano de 2020, 
          logo após o inicío da pandemia do Covid-19. No final do mesmo ano entrei 
          na faculdade de Sistemas de informação pela Universidade do Estado de Santa Catarina, 
          onde estudei até o 3° semestre antes de fazer o processo seletivo para entrar na Trybe.
        </p>
        <p
        className="text-paragraph">
          Trabalhei um ano na área de Suporte de TI, 
          prestando atendimento ao usuário, fazendo montagem e manutenção em computadores 
          e realizando o gerenciamento da rede interna da empresa.
          Meu objetivo na Trybe é me tornar um desenvolvedor Web com amplo conhecimento em 
          Front-End, Back-End e Computer Science.
        </p>
      </div>
      <Footer />
    </div>
  )
};

export default About;