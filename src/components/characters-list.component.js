import React from 'react';

import CharacterCard from './character-card.component';

import './characters-list.styles.scss';

const CharacterList = ({ filteredCharacters }) => {
  return (
    <div className='characters-list'>
      {
        filteredCharacters.length ?
          filteredCharacters.map(({ _id, name, ...otherProps }) => {
            return (
              <div key={_id} className='characters-list-grid-item'>
                <CharacterCard key={_id} name={name} {...otherProps} />
              </div>)
          }
          )
          : <h1>No Characters Found</h1>
      }
    </div>
  );
}

export default CharacterList;