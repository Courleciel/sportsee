import React from 'react';
import './HorizontalNavbar.css';
import logo from '../../assets/logo.png';

const HorizontalNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">Accueil</li>
        <li className="navbar-item">Profil</li>
        <li className="navbar-item">Réglages</li>
        <li className="navbar-item">Communauté</li>
      </ul>
    </nav>
  );
};

export default HorizontalNavbar;
