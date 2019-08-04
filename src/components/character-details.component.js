import React from 'react';
import { connect } from 'react-redux';

import da from '../assets/DA.jpg';
import de from '../assets/DE.png';
import mom from '../assets/MOM.jpg';
import ootp from '../assets/OOTP.png';

import { isUnknown, generateHouseColor } from '../utils/helper';

const CharacterDetails = ({ characters, match }) => {
  const characterToDisplay = characters.find(character => character.name.replace(' ', '_').toLowerCase() === match.params.characterName.toLowerCase());
  const {
    name, role, house, school, wand, patronus, boggart, animagus,
    ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater,
    bloodStatus, species, marital_status, nationality, alias_alternate,
    born, signature, imageUrl
  } = characterToDisplay;
  const houseColor = house ? generateHouseColor(name) : 'none';
  console.log(Array.isArray(alias_alternate))
  return (
    <div className='character-details-page'>
      <div className='character-details-page-header'>
        <h1 className='character-details-title' style={{ backgroundColor: `${houseColor}` }}>{name}</h1>
        <div className='character-picture-container'>
          <img src={imageUrl} alt='character-picture' />
          {signature ? <img src={signature} alt='character-signature' /> : null}
          {orderOfThePhoenix ? <img src={ootp} alt='Order Of The Phoenix' /> : null}
          {dumbledoresArmy ? <img src={da} alt='Dumbledore"s Army' /> : null}
          {ministryOfMagic ? <img src={mom} alt='Ministry Of Magic' /> : null}
          {deathEater ? <img src={de} alt='Death Eater' /> : null}
        </div>
      </div>
      <div className='character-details-section'>
        <h2 className='character-details-section-title'>Biographical Information</h2>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Born</h3>
          <div className='character-details-section-content-list'>{born}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Blood Status</h3>
          <div className='character-details-section-content-list'>{bloodStatus}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Nationality</h3>
          <div className='character-details-section-content-list'>{nationality}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Also known as</h3>
          <div className='character-details-section-content-list'>
            {
              Array.isArray(alias_alternate) ?
                (<ul>{alias_alternate.map(item => <li className='list-item'>{item}</li>)}</ul>)
                : alias_alternate
            }
          </div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'></h3>
          <div className='character-details-section-content-list'></div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'></h3>
          <div className='character-details-section-content-list'></div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'></h3>
          <div className='character-details-section-content-list'></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  characters: state.character.characters
});

export default connect(mapStateToProps)(CharacterDetails); 