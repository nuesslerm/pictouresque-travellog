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
        className="testimonial-quote group "
        style={{ width: '600px', 'margin-left': 'auto' }}
      >
        <img src="http://placehold.it/120x120" />
        <div className="quote-container">
          <blockquote>
            <p>
              Overall, fantastic! I'd recommend them to anyone looking for a
              creative,
              <br /> thoughtful, and professional team.”
            </p>
          </blockquote>
          <cite>
            <span>Kristi Bruno</span>
            <br />
            Social Media Specialist
            <br />
            American College of Chest Physicians
          </cite>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
