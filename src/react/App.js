import React from 'react';

import HomePage from './pages/homepage/homepage.component.jsx';
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
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
