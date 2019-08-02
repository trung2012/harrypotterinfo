import React from 'react';
import { connect } from 'react-redux';
import CharacterList from './characters-list.component';

import { generateHouseColor } from '../utils/helper';

import './house-details.styles.scss';

const HouseDetails = ({ houses, characters, match }) => {
  const houseToDisplay = houses.find(house => house.name.toLowerCase() === match.params.houseName.toLowerCase());
  const { name, mascot, headOfHouse, houseGhost, values, colors, intro, imageUrl } = houseToDisplay;
  // const houseMembers = members.map(memberId => characters.find(character => character._id === memberId && character.house.toLowerCase() === name.toLowerCase())).filter(member => member !== undefined);
  const houseMembers = characters.filter(character => character.house && character.house.toLowerCase() === name.toLowerCase());
  const houseColor = generateHouseColor(name);
  return (
    <div className='house-details-page'>
      <header className='house-details-header'>
        <h2 className='house-details-header-title' style={{ color: `${houseColor}` }}>{name}</h2>
        <div className='house-details-header-image-container'>
          <img alt={`${name}`} src={imageUrl} />
        </div>
        <p className='house-details-header-intro'>{intro}</p>
      </header>
      <div className='house-details-attributes'>
        <div className='house-details-attribute'>Values: {values.join(', ')}</div>
        <div className='house-details-attribute'>House colors: {colors.join(', ')}</div>
        <div className='house-details-attribute'>Mascot: {mascot}</div>
        <div className='house-details-attribute'>Head of house: {headOfHouse}</div>
        <div className='house-details-attribute'>House ghost: {houseGhost}</div>
      </div>
      <div className='house-details-members-section'>
        <h1 className='house-details-members-title'>House Members</h1>
        <div className='house-details-members-container'>
          <CharacterList filteredCharacters={houseMembers} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  houses: state.house.houses,
  characters: state.character.characters
});

export default connect(mapStateToProps)(HouseDetails);