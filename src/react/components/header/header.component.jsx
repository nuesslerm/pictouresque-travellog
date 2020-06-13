import React from 'react';
import { withRouter } from 'react-router-dom';

// Create-react-app uses SVGR under the hood to make it possible to transform
// and import SVG as a React component.
// https://blog.logrocket.com/how-to-use-svgs-in-react/#:~:text=SVGs%20can%20be%20imported%20and,%7D%20from%20'.%2Flogo.
import Logo from '../../../assets/beatport.svg';

import './header.styles.scss';

const Header = ({ history }) => (
  <div className="header-styles">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" onClick={() => history.push('/')}>
        <Logo className="logo-container" />
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
);

export default withRouter(Header);
