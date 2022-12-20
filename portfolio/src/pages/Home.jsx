import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css'

function Home() {
  return(
    <div>
      <Header />
      <div
      className="title-text"
      >
        <h1>Home</h1>
      </div>

      <div
      className="introduction-div"
      >
        <h1
        className="presentation"
        >
          I'm Peterson Paganelli
        </h1>
        <p
        className="presentation2"
        >FullStack Developer</p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;