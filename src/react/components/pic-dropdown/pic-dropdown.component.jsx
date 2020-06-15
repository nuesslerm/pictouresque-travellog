import React from 'react';

import './pic-dropdown.styles.scss';

const PicDropdown = () => (
  <div
    className="dropdown-menu"
    // this style makes the dropdown expand to the left, when screen width decreases
    style={{ right: '0', left: 'auto' }}
  >
    <div className="dropdown-item" onClick={() => history.push('/')}>
      Pic 1
    </div>
    <div className="dropdown-item" onClick={() => history.push('/')}>
      Pic 2
    </div>
    <div className="dropdown-item" onClick={() => history.push('/')}>
      Pic 3
    </div>
  </div>
);

export default PicDropdown;
