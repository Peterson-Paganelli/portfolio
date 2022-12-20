import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import '../styles/Contact.css'
import '../App.css'
import { FaRegEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
function Contact() {
  return(
    <div>
      <Header />
      <div
      className="contact"
      >
        <h1>Contact</h1>
        <div>
          <div>
            <h3 className='emailIcon'><FaRegEnvelope /></h3>
            <h3>petersonpaganelli@outlook.com</h3>
          </div>
          <div
          className="icons"
          >
            <a className='linkedinIcon' href="https://br.linkedin.com/in/peterson-paganelli-1832b91b9?trk=profile-badge"><FaLinkedin /></a>
            <a className='githubIcon' href="https://github.com/Peterson-Paganelli"><FaGithub /></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;