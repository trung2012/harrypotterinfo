import React from 'react';

import './searchbar.styles.scss';

const SearchBar = ({ searchInput, type, onInputChange }) => {
  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder={`Type a ${type} name to search`}
        value={searchInput}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;