import React from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/">
                <img src={logo} alt="Fico com a cria"/>
            </a>
            <div className="right-links">
                <a className="nav-link" href="/sobre">Sobre nós</a>
                <a className="nav-link" href="/blog">Blog</a>
                <a className="nav-link" href="/contato">Entre em contato</a>
                <a className="nav-link" href="/babas">Nossa babás</a>
                <a className="nav-link" href="/cadastro">Seja uma babá</a>
                <button className="nav-button">
                    <a href="/buscar">Encontre uma babá</a>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;