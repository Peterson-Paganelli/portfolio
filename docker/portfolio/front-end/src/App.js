import './App.css';
import React from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Routes, Route } from "react-router";


function App() {
  return (
    <div
    className='main-div'> 
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/projects' element={ <Projects /> } />
      </Routes>
    </div>
  );
}

export default App;
