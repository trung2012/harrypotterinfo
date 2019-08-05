import React from 'react';
import { connect } from 'react-redux';

import da from '../assets/DA.jpg';
import de from '../assets/DE.png';
import mom from '../assets/MOM.jpg';
import ootp from '../assets/OOTP.png';
import back from '../assets/back.png';

import { generateHouseColor } from '../utils/helper';
import './character-details.styles.scss'

const CharacterDetails = ({ characters, match, history }) => {
  const characterToDisplay = characters.find(character => character.name.replace(' ', '_').toLowerCase() === match.params.characterName.toLowerCase());
  const {
    name, wand, patronus, boggart, animagus,
    ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater,
    bloodStatus, species, marital_status, nationality, alias,
    born, signature, imageUrl, titles, gender, hair_colour, eye_colour, skin_colour,
    occupation, romances, house, school
  } = characterToDisplay;

  const isValArray = attValue => Array.isArray(attValue) ? <ul>{attValue.map(att => (<li>{att}</li>))}</ul> : attValue;
  const houseStyle = house ? { backgroundColor: `${generateHouseColor(house)}`, color: 'white' } : { backgroundColor: '#402b2b', color: 'white' };
  return (
    <div className='character-details-page-container'>
      <div className='go-back'>
        <img src={back} title='Go Back' alt='go back' className='back-button' onClick={() => history.goBack()}></img>
      </div>
      <div className='character-details-page'>
        <div className='character-details-page-header'>
          <h1 className='character-details-title' style={houseStyle}>{name}</h1>
          <div className='profile-pics'>
            <img src={imageUrl} alt={name} title={name} className='display-picture' />
            {signature ? <img src={signature} alt='character-signature' className='signature' /> : null}
          </div>
          <div className='character-picture-container'>
            {orderOfThePhoenix ? <img src={ootp} alt='Order Of The Phoenix' title='Member of the Order Of The Phoenix' /> : null}
            {dumbledoresArmy ? <img src={da} alt='Dumbledore"s Army' title='Member of Dumbledore"s Army' /> : null}
            {ministryOfMagic ? <img src={mom} alt='Ministry Of Magic' title='Member of the Ministry Of Magic' /> : null}
            {deathEater ? <img src={de} alt='Death Eater' title='Death Eater' /> : null}
          </div>
        </div>
        <div className='character-details-sections-container'>
          <div className='character-details-sections'>
            <div className='character-details-section'>
              <h2 className='character-details-section-title'>Biographical Information</h2>
              {born ? <div className='character-details-section-content'>
                <h3 className='character-details-section-content-att'>Born</h3>
                <div className='character-details-section-content-list'>{born}</div>
              </div> : null}
              {bloodStatus ? <div className='character-details-section-content'>
                <h3 className='character-details-section-content-att'>Blood Status</h3>
                <div className='character-details-section-content-list'>{bloodStatus}</div>
              </div> : null}
              {marital_status ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Marital Status</h3>
                  <div className='character-details-section-content-list'>{marital_status}</div>
                </div> : null}
              {nationality ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Nationality</h3>
                  <div className='character-details-section-content-list'>{nationality}</div>
                </div> : null}
              {alias ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Aliases</h3>
                  <div className='character-details-section-content-list'>{alias}</div>
                </div> : null}
              {titles ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Title(s)</h3>
                  <div className='character-details-section-content-list'>
                    {isValArray(titles)}
                  </div>
                </div> : null}
            </div>
            <div className='character-details-section'>
              <h2 className='character-details-section-title'>Physical Information</h2>
              {species ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Species</h3>
                  <div className='character-details-section-content-list'>{species}</div>
                </div> : null}
              {gender ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Gender</h3>
                  <div className='character-details-section-content-list'>{gender}</div>
                </div> : null}
              {hair_colour ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Hair color</h3>
                  <div className='character-details-section-content-list'>{hair_colour}</div>
                </div> : null}
              {eye_colour ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Eye color</h3>
                  <div className='character-details-section-content-list'>{eye_colour}</div>
                </div> : null}
              {skin_colour ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Skin color</h3>
                  <div className='character-details-section-content-list'>{skin_colour}</div>
                </div> : null}
            </div>

            <div className='character-details-section'>
              <h2 className='character-details-section-title'>Magical Characteristics</h2>
              {boggart ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Boggart</h3>
                  <div className='character-details-section-content-list'>{boggart}</div>
                </div> : null}
              {wand ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Wand</h3>
                  <div className='character-details-section-content-list'>{isValArray(wand)}</div>
                </div> : null}
              {patronus ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Patronus</h3>
                  <div className='character-details-section-content-list'>{patronus}</div>
                </div> : null}
              {animagus ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Animagus</h3>
                  <div className='character-details-section-content-list'>{animagus}</div>
                </div> : null}
            </div>

            <div className='character-details-section'>
              <h2 className='character-details-section-title'>Affiliation</h2>
              {occupation ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Occupation</h3>
                  <div className='character-details-section-content-list'>{isValArray(occupation)}</div>
                </div> : null}
              {school ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>School</h3>
                  <div className='character-details-section-content-list'>{school}</div>
                </div> : null}
              {house ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>House</h3>
                  <div className='character-details-section-content-list'>{house}</div>
                </div> : null}
              {romances ?
                <div className='character-details-section-content'>
                  <h3 className='character-details-section-content-att'>Romances</h3>
                  <div className='character-details-section-content-list'>{isValArray(romances)}</div>
                </div> : null}
            </div>
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