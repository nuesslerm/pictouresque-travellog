import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import AboutPage from './pages/about-page/about-page.component.jsx';
import ImagesPage from './pages/images-page/images-page.component.jsx';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/images" component={ImagesPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
