import React from 'react';

import HomePage from './pages/homepage/homepage.component.jsx';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
