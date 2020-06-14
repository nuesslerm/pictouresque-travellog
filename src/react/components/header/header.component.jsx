import React from 'react';
import { withRouter } from 'react-router-dom';

import PicDropdown from '../pic-dropdown/pic-dropdown.component.jsx';

// Create-react-app uses SVGR under the hood to make it possible to transform
// and import SVG as a React component.
// https://blog.logrocket.com/how-to-use-svgs-in-react/#:~:text=SVGs%20can%20be%20imported%20and,%7D%20from%20'.%2Flogo.
import Logo from '../../../assets/Office-Items.svg';

import './header.styles.scss';

const Header = ({ history }) => (
  <div className="header-styles">
    <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
      <div className="navbar-brand" onClick={() => history.push('/')}>
        <div
          className="pl-lg-5
                    pr-lg-3
                    px-md-3
                    px-sm-3"
        >
          <Logo className="logo-container" />
        </div>

        <div
          className="navbar-collapse collapse 
                    px-xl-5
                    px-lg-3
                    px-md-3
                    px-sm-2"
        >
          <h3>PicTourEsque</h3>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-end">
        <div
          className="nav-item active dropdown 
                        px-xl-5
                        px-lg-4
                        px-md-3
                        px-sm-3
                        px-3"
        >
          <div
            // className="btn"
            className="dropdown-toggle d-flex align-items-center"
            onClick={() => history.push('/')}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="d-none d-md-block">Your&emsp;</div>
            <i className="fas fa-camera-retro fa-fw fa-lg"></i>
            &nbsp;
          </div>
          <PicDropdown />
        </div>

        <div
          className="nav-item
            px-xl-5 
            px-lg-5 
            px-md-4
            px-sm-3
            px-3"
          onClick={() => history.push('/')}
        >
          Login
        </div>

        <div
          className="nav-item d-none d-md-block
              px-xl-5 
              px-lg-5 
              pr-md-4
              pl-md-3"
          onClick={() => history.push('/')}
        >
          About
        </div>

        <div
          className="nav-item
            pr-lg-3 
            pl-lg-5
            pr-md-3 
            pl-md-4 
            px-sm-3 
            pl-2
            pr-3"
          onClick={() => history.push('/')}
        >
          <i className="fab fa-facebook"></i>
        </div>

        <div
          className="nav-item
            pr-xl-5
            pl-xl-3
            pr-lg-4
            pl-lg-3
            px-md-3
            px-sm-3
            pl-2
            pr-2"
          onClick={() => history.push('/')}
        >
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </nav>
  </div>
);

export default withRouter(Header);
