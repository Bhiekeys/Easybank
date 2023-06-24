/** @format */

import React from 'react';
import './secondp.css'
import Img from '../assets/icon-online.svg';
import Im from '../assets/icon-onboarding.svg';
import Imag from '../assets/icon-api.svg';
import Ig from '../assets/icon-budgeting.svg';


const Secondp = () => {
  return (
    <div className="secondp">
      <div className="secondp-first">
        <h2> Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="secondp-second">
        <div className="one">
          <img src={Img} alt="" />
          <h4>Online Banking</h4>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="one">
          <img src={Ig} alt="" />
          <h4>Simple Budgeting</h4>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="one">
          <img src={Im} alt="" />
          <h4>Fast Onboarding</h4>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="one">
          <img src={Imag} alt="" />
          <h4>Open API</h4>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Secondp;
