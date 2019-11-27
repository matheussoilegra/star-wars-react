import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1>STAR WARS</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>Characters</li>
        <li>Planets</li>
        <li>Vehicles</li>
        <li>Species</li>
        <li>Starships</li>
        <li>About</li>
      </ul>
    </nav>
  </header>
);

export default Header;
