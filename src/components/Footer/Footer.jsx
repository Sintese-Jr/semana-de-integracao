import React from 'react';
import logo from '../../assets/logo.svg';
import spotify from '../../assets/spotify.svg';
import whatsapp from '../../assets/whatsapp.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="links-container">
                    <h2>Contato</h2>
                    <a href="https://open.spotify.com/episode/1zWakx6QwCggs3qxQbkZNz?si=QwUTDXh9Q7ieh_xZBMPVNw&nd=1">
                        <img src={spotify} alt="Spotify" />Podcast
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511999999999">
                        <img src={whatsapp} alt="Whatsapp"/> (11) 999999999
                    </a>
                    <a href="https://www.instagram.com/ficocomacria/?hl=pt-br">
                        <img src={instagram} alt="Instagram"/> @ficocomacria
                    </a>
                    <a href="https://www.facebook.com/ficocomacria.sp/">
                        <img src={facebook} alt="Facebook"/> @ficocomacria.sp
                    </a>
                </div>
                <div className="logo">
                    <img src={logo} alt="Fico com a cria"/>
                </div>
            </div>
            <div className="copyright">
                © 2021 Todos os direitos Reservados | Síntese Jr.
            </div>
        </footer>
    );
}

export default Footer;