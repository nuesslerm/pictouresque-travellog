import React from 'react';

import './animal-card.styles.scss';

const AnimalCard = ({ emoji, color }) => (
  <div className={`animal-card ${color}`}>{emoji}</div>
);

export default AnimalCard;
