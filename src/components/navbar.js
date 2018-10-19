import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className='navbar navbar-expand-sm bg-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/tweets">Tweets</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;