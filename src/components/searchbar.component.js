import React from 'react';
import { connect } from 'react-redux';
import { filterCharacters } from '../redux/character/character.actions';

import './searchbar.styles.scss';

const SearchBar = ({ searchInput, type, filterCharacters }) => {
  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder={`Type a ${type} name to search`}
        value={searchInput}
        onChange={(event) => filterCharacters(event.target.value)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  searchInput: state.character.searchInput
});

const mapDispatchToProps = dispatch => ({
  filterCharacters: (searchInput) => dispatch(filterCharacters(searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);