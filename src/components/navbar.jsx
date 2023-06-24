/** @format */

import React from 'react';
import './navbar.css';
import logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className="btn"> Request Invite</button>
    </div>
  );
};

export default Navbar;
