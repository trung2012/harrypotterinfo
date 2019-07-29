import React from 'react';

import './searchbar.styles.scss';

const SearchBar = ({ searchInput, onInputChange, type }) => {
  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder={`Type a ${type} name to search`}
        value={searchInput}
        onChange={onInputChange}
      />
    </div>
  );
}

export default SearchBar;