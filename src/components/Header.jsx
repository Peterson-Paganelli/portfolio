import '../styles/Header.css'
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/about'>About Me</Link>
            <Link className='links' to='/projects'>Projects</Link>
            <Link className='links' to='/contact'>Contact</Link>
        </header>
    )
}

export default Header;