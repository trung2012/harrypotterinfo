import React, { useState } from 'react';

import './spell-card.styles.scss';
import placeholderImage from '../assets/spell.png';

const SpellCard = ({ spell, type, effect, imageUrl }) => {
  const [watching, setWatching] = useState(false);

  const cardStyle = (spell.toLowerCase() === 'avada kedavra' ||
    spell.toLowerCase() === 'crucio' ||
    spell.toLowerCase() === 'imperio')
    ? { backgroundColor: '#0a0a0a', color: 'white' } : null;

  const watchGif = () => {
    if (imageUrl && imageUrl.includes('.gif')) {
      setWatching(true);
      setTimeout(() => setWatching(false), 4500);
    }
  }

  return (
    <div className='spell-card' style={cardStyle} >
      <div className='spell-card-image-container'>
        <img
          src={imageUrl ? imageUrl : placeholderImage}
          alt='profile-pic'
          className={`spell-card-image ${watching ? 'watch' : ''} `}
          onClick={watchGif}
        />
      </div>
      <div className='spell-card-info'>
        <div className='spell-card-info-name' onClick={() => window.open(`https://harrypotter.fandom.com/wiki/${spell.replace(' ', '_')}`)}>{spell}</div>
        <div className='spell-card-info-item'>Type: {type}</div>
        <div className='spell-card-info-item'>Effect: {effect}</div>
      </div>
    </div>
  );
}

export default SpellCard;