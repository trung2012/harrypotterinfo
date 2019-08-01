import React from 'react';

import './spell-card.styles.scss';
import placeholderImage from '../assets/wizard.jpg';

const SpellCard = ({ spell, type, effect, imageUrl }) => {
  const cardStyle = (spell.toLowerCase() === 'avada kedavra' || spell.toLowerCase() === 'crucio' || spell.toLowerCase() === 'imperio') ? { backgroundColor: '#0a0a0a', color: 'white' } : null;

  return (
    <div className='spell-card' style={cardStyle}>
      <div className='spell-card-image-container'>
        {}<img src={imageUrl ? imageUrl : placeholderImage} alt='profile-pic'></img>
      </div>
      <div className='spell-card-info'>
        <div className='spell-card-info-name'>{spell}</div>
        <div className='spell-card-info-item'>Type: {type}</div>
        <div className='spell-card-info-item'>Effect: {effect}</div>
      </div>
    </div>
  );
}

export default SpellCard;