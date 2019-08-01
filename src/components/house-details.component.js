import React from 'react';
import { connect } from 'react-redux';
import { fetchHousesStartAsync } from '../redux/house/house.actions';
import { fetchCharactersStartAsync } from '../redux/character/character.actions';
import { findCharacterById } from '../utils/helper';
import CharacterCard from './character-card.component';

class HouseDetails extends React.Component {
  componentDidMount() {
    this.props.fetchHousesStartAsync();
    this.props.fetchCharactersStartAsync();
  }


  render() {
    const { houses, characters, match, isHouseLoading, isCharacterLoading, houseErrorMessage, characterErrorMessage } = this.props;
    if (isHouseLoading || isCharacterLoading) {
      return null
    }
    else {
      console.log(houses);
      const houseToDisplay = houses.find(house => house.name.toLowerCase() === match.params.houseName.toLowerCase());
      const { name, mascot, headOfHouse, houseGhost, values, colors, intro, members, imageUrl } = houseToDisplay;
      const houseMembers = members.map(memberId => characters.find(character => character._id === memberId));
      console.log(houseMembers);
      return (
        <div className='house-details-page'>
          <header className='house-details-header'>
            <h2 className='house-details-header-title'>{name}</h2>
            <div className='house-details-header-image-container'>
              <img alt={`${name}`} src={imageUrl} />
            </div>
            <p className='house-details-header-intro'>{intro}</p>
          </header>
          <div className='house-details-attributes'>
            <div className='values'>Values: {values.join(', ')}</div>
            <div className='colors'>House colors: {colors.join(', ')}</div>
            <div className='mascot'>Mascot: {mascot}</div>
            <div className='headOfHouse'>Head of house: {headOfHouse}</div>
            <div className='houseGhost'>House ghost: {houseGhost}</div>
          </div>
          <div className='house-details-members'>
            {
              houseMembers ?
                houseMembers.map(({ _id, name, ...otherProps }) => (<div key={_id} className='characters-overview-grid-item'>
                  <CharacterCard key={_id} name={name} {...otherProps} />
                </div>))
                : null
            }
          </div>
        </div>
      );
    }

  }

}

const mapStateToProps = state => ({
  houses: state.house.houses,
  isHouseLoading: state.house.isLoading,
  characters: state.character.characters,
  houseErrorMessage: state.house.errorMessage,
  isCharacterLoading: state.character.isLoading,
  characterErrorMessage: state.character.errorMessage
});

export default connect(mapStateToProps, { fetchHousesStartAsync, fetchCharactersStartAsync })(HouseDetails);