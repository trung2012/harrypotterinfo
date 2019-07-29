import React from 'react';

import { mapDataToSpell } from '../utils/helper';
import './spell-card.styles.scss';
import placeholderImage from '../assets/wizard.jpg';

const SpellCard = ({ spell, type, effect }) => {
  const imageUrl = mapDataToSpell(spell) ? mapDataToSpell(spell).imageUrl : null;

  return (
    <div className='spell-card'>
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