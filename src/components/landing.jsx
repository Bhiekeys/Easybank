/** @format */

import React from 'react';
import Image from '../assets/bg-intro-desktop.svg';
import Img from '../assets/image-mockups.png';
import './landing.css'
const Page = () => {
  return (
    <div className="LandingPage">
      <div className="LandingP">
        <h3> Next generation digital banking</h3>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button>Request Invite</button>
      </div>

      <img className="im" src={Img} alt="" />
    </div>
  );
};

export default Page;
