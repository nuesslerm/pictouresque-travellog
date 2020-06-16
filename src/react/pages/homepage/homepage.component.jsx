import React from 'react';

import './homepage.styles.scss';

import calm from '../../../assets/background-images/calm-2.png';

const HomePage = () => (
  <div className="homepage">
    <div className="cover-container">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${calm})` }}
      ></div>
      <div
        className="testimonial-quote right"
        style={{ width: '600px', 'margin-left': 'auto' }}
      >
        <img src="http://placehold.it/120x120" />
        <div className="quote-container">
          <blockquote>
            <p>Fantastic images.</p>
            <div className="rating">
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
              <i className="gold fas fa-3x fa-star"></i>
            </div>
          </blockquote>
          <cite>
            <span>Markus Nüssler</span>
            <br />
            Social Media Specialist
          </cite>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
