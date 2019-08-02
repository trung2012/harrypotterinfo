import React from 'react';
import { connect } from 'react-redux';

const CharacterDetails = ({ characters, match }) => {
  const characterToDisplay = characters.find(character => character.name.replace(' ', '_').toLowerCase() === match.params.characterName.toLowerCase());
  const { name } = characterToDisplay;
  return (
    <div className='character-details-page'>
      {name}
    </div>
  );
}

const mapStateToProps = state => ({
  characters: state.character.characters
});

export default connect(mapStateToProps)(CharacterDetails);