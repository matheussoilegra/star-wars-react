import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="title">STAR WARS</h1>
    <nav className="nav">
      <ul className="list">
        <li className="item">Home</li>
        <li className="item">Characters</li>
        <li className="item">Planets</li>
        <li className="item">Vehicles</li>
        <li className="item">Species</li>
        <li className="item">Starships</li>
        <li className="item">About</li>
      </ul>
    </nav>
  </header>
);
export default Header;
