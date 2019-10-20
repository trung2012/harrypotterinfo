import React from 'react';
import { withRouter } from 'react-router-dom';

import placeholderImage from '../assets/wizard.png';
import { generateHouseColor } from '../utils/helper';
import './character-card.styles.scss';


const CharacterCard = ({ name, imageUrl, house, deathEater, history }) => {
  const cardStyle = house ? { backgroundColor: `${generateHouseColor(house)}`, color: 'white' } : deathEater ? { backgroundColor: '#1f241f', color: 'white' } : null;

  return (
    <div className='character-card' style={cardStyle} onClick={() => history.push(`/characters/${name.replace(' ', '_')}`)}>
      <div className='character-card-image-container' style={{ backgroundImage: `url(${imageUrl || placeholderImage})` }}>
      </div>
      <div className='character-card-info'>
        <div className='character-card-info-name'>{name}</div>
      </div>
    </div>
  );
}

export default withRouter(CharacterCard);