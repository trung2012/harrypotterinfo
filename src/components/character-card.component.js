import React from 'react';

import { mapDataToCharacter } from '../utils/helper';
import './character-card.styles.scss';
import placeholderImage from '../assets/wizard.jpg';

const CharacterCard = ({ name }) => {
  const imageUrl = mapDataToCharacter(name) ? mapDataToCharacter(name).imageUrl : null;

  return (
    <div className='character-card'>
      <div className='character-card-image-container'>
        {}<img src={imageUrl ? imageUrl : placeholderImage} alt='profile-pic'></img>
      </div>
      <div className='character-card-info'>
        <div className='character-card-info-name'>{name}</div>
      </div>
    </div>
  );
}

export default CharacterCard;