import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = props => {
  const { title } = props;
  return (
    <div className="navbar">
      <ul className="navbarWrapper">
        <li className="navbarLink">
          <NavLink to="/search">{title}</NavLink>
        </li>
        <li className="navbarIcon">
          <NavLink to="/person/new" className="addPersonLink">
            <p className="navbarText">Register New Person </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
