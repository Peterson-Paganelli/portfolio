import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css'

function Home() {
  return(
    <div>
      <Header />
      <div
      className="title-text">
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
