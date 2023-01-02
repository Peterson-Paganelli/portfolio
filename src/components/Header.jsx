import '../styles/Header.css'
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/about'>Sobre mim</Link>
            <Link className='links' to='/projects'>Projetos</Link>
            <Link className='links' to='/contact'>Contato</Link>
        </header>
    )
}

export default Header;