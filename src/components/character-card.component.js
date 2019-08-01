import React from 'react';

import placeholderImage from '../assets/wizard.jpg';
import { generateHouseColor } from '../utils/helper';
import './character-card.styles.scss';


const CharacterCard = ({ name, imageUrl, house, deathEater }) => {
  const cardStyle = house ? { backgroundColor: `${generateHouseColor(house)}`, color: 'white' } : deathEater ? { backgroundColor: '#1f241f', color: 'white' } : null;

  return (
    <div className='character-card' style={cardStyle}>
      <div className='character-card-image-container'>
        <img src={imageUrl ? imageUrl : placeholderImage} alt='profile-pic'></img>
      </div>
      <div className='character-card-info'>
        <div className='character-card-info-name'>{name}</div>
      </div>
    </div>
  );
}

export default CharacterCard;