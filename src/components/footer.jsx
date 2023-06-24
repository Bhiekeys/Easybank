/** @format */
import logo from '../assets/logo.svg'
import React from 'react';
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import youtube from '../assets/icon-youtube.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="firstp-footer">
          <div>
            <img className="logo" src={logo} alt="" />
            <div className="socials">
              <img src={facebook} alt="" />
              <img src={youtube} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="secondp-footer">
          <button>Request Invite</button>
          <small>Easybank, All Rights Reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
