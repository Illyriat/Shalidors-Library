import NavBar from './NavBar.js';
import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;