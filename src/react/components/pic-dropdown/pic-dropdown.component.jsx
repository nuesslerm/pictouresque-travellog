import React from 'react';

import './pic-dropdown.styles.scss';

const PicDropdown = () => (
  <div className="dropdown-menu" style={{ right: '0', left: 'auto' }}>
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
