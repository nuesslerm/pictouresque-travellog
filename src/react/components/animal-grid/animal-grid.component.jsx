import React from 'react';

import AnimalCard from '../animal-card/animal-card.component.jsx';

import './animal-grid.styles.scss';

class AnimalGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [
        { id: 1, emoji: '🦊', color: 'green' },
        { id: 2, emoji: '🐰', color: 'red' },
        { id: 3, emoji: '🐸', color: 'blue' },
        { id: 4, emoji: '🦁', color: 'yellow' },
        { id: 5, emoji: '🐯', color: 'purple' },
        { id: 6, emoji: '🐭', color: 'brown' },
        { id: 7, emoji: '🦄', color: 'green' },
        { id: 8, emoji: '🐲', color: 'red' },
        { id: 9, emoji: '🐷', color: 'blue' },
        { id: 10, emoji: '🐺', color: 'yellow' },
        { id: 11, emoji: '🐼', color: 'purple' },
        { id: 12, emoji: '🐻', color: 'brown' },
      ],
    };
  }

  render() {
    // const {emoji, color} = this.state;
    return (
      <div className="animal-grid">
        {this.state.animals.map(({ id, ...otherProps }) => (
          <AnimalCard key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default AnimalGrid;
