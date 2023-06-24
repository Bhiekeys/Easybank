/** @format */

import React from 'react';
import image from '../assets/image-currency.jpg';
import Imge from '../assets/image-restaurant.jpg'
import Img from '../assets/image-plane.jpg'
import im from '../assets/image-confetti.jpg'
import './thirdp.css'
const Thirdp = () => {
  return (
    <div className="Articles">
      <div className="article-head">
        <h3>Latest Article</h3>
      </div>

      <div className="thirdp-article">
        <div className="article">
          <img src={image} alt="" />
          <div className="words">
            <small> By Claire Robinson</small>
            <h2>Receive money in any currency with no fees</h2>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="article">
          <img src={Imge} alt="" />
          <div className="words">
            <small> By Claire Robinson</small>
            <h2>Receive money in any currency with no fees</h2>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="article">
          <img src={Img} alt="" />
          <div className="words">
            <small> By Claire Robinson</small>
            <h2>Receive money in any currency with no fees</h2>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="article">
          <img src={im} alt="" />
          <div className="words">
            <small> By Claire Robinson</small>
            <h2>Receive money in any currency with no fees</h2>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdp;
