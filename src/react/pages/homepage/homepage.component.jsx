import React from 'react';

import './homepage.styles.scss';

import calm from '../../../assets/background-images/calm-2.png';
import testimonial from '../../../assets/testimonial-images/markus.jpg';

const HomePage = () => (
  <div className="homepage">
    <div className="cover-container">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${calm})` }}
      ></div>

      <div
        className="testimonial-quote"
        // style={{ width: '600px', 'margin-left': 'auto' }}
      >
        <img src={`${testimonial}`} />
        <div className="quote-container">
          <div className="blockquote">
            <p>
              « I don't know what I would do without my bike on a sunny ... »
            </p>
            <div className="rating">
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
              <i className="grey fas fa-3x fa-star"></i>
            </div>
          </div>
          <div className="cite-container">
            <div class="cite">
              <span>Markus Nüssler</span>
              <br />
              <p>Travel Blogger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
