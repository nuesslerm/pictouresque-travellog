import React from 'react';

import AnimalGrid from './components/animal-grid/animal-grid.component.jsx';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <AnimalGrid />
      </div>
    );
  }
}

export default App;
