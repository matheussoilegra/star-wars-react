import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  state = {
    routes: [
      { path: '/', item: 'Home' },
      { path: '/characters', item: 'Characters' },
      { path: '/planets', item: 'Planets' },
      { path: '/species', item: 'Species' },
      { path: '/starships', item: 'Starships' },
      { path: '/vehicles', item: 'Vehicles' },
      { path: '/about', item: 'About' }
    ]
  };

  render() {
    const { routes } = this.state;
    return (
      <div className="header">
        <h1>STAR WARS</h1>
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.item}>
                <a href={route.path}>{route.item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
