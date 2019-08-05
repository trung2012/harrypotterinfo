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
    name, wand, patronus, boggart, animagus,
    ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater,
    bloodStatus, species, marital_status, nationality, alias,
    born, signature, imageUrl, titles, gender, hair_colour, eye_colour, skin_colour,
    occupation, romances, house, school
  } = characterToDisplay;

  const isValArray = attValue => Array.isArray(attValue) ? <ul>{attValue.map(att => (<li>{att}</li>))}</ul> : attValue;
  const houseStyle = house ? { backgroundColor: `${generateHouseColor(house)}`, color: 'white' } : 'none';
  return (
    <div className='character-details-page'>

      <div className='character-details-page-header'>
        <h1 className='character-details-title' style={houseStyle}>{name}</h1>
        <div className='character-picture-container'>
          <img src={imageUrl} alt='character' />
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
          <div className='character-details-section-content-list'>{isUnknown(born)}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Blood Status</h3>
          <div className='character-details-section-content-list'>{isUnknown(bloodStatus)}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Blood Status</h3>
          <div className='character-details-section-content-list'>{isUnknown(marital_status)}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Nationality</h3>
          <div className='character-details-section-content-list'>{isUnknown(nationality)}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Aliases</h3>
          <div className='character-details-section-content-list'>{isUnknown(alias)}</div>
        </div>
        <div className='character-details-section-content'>
          <h3 className='character-details-section-content-att'>Title(s)</h3>
          <div className='character-details-section-content-list'>
            {isValArray(isUnknown(titles))}
          </div>
        </div>

        <div className='character-details-section'>
          <h2 className='character-details-section-title'>Physical Information</h2>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Species</h3>
            <div className='character-details-section-content-list'>{isUnknown(species)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Gender</h3>
            <div className='character-details-section-content-list'>{isUnknown(gender)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Hair color</h3>
            <div className='character-details-section-content-list'>{isUnknown(hair_colour)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Eye color</h3>
            <div className='character-details-section-content-list'>{isUnknown(eye_colour)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Skin color</h3>
            <div className='character-details-section-content-list'>{isUnknown(skin_colour)}</div>
          </div>
        </div>

        <div className='character-details-section'>
          <h2 className='character-details-section-title'>Magical Characteristics</h2>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Boggart</h3>
            <div className='character-details-section-content-list'>{isUnknown(boggart)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Wand</h3>
            <div className='character-details-section-content-list'>{isValArray(isUnknown(wand))}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Patronus</h3>
            <div className='character-details-section-content-list'>{isUnknown(patronus)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Animagus</h3>
            <div className='character-details-section-content-list'>{isUnknown(animagus)}</div>
          </div>
        </div>

        <div className='character-details-section'>
          <h2 className='character-details-section-title'>Affiliation</h2>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Occupation</h3>
            <div className='character-details-section-content-list'>{isValArray(isUnknown(occupation))}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>School</h3>
            <div className='character-details-section-content-list'>{isUnknown(school)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>House</h3>
            <div className='character-details-section-content-list'>{isUnknown(house)}</div>
          </div>
          <div className='character-details-section-content'>
            <h3 className='character-details-section-content-att'>Romances</h3>
            <div className='character-details-section-content-list'>{isValArray(isUnknown(romances))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  characters: state.character.characters
});

export default connect(mapStateToProps)(CharacterDetails); 