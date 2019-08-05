import React from 'react';
import { connect } from 'react-redux';

import CharacterList from './characters-list.component';
import SearchBar from './searchbar.component';
import Spinner from './spinner.component';
import { filterCharacters } from '../redux/character/character.actions';
import Header from '../components/header.component';

import './characters-overview.styles.scss';

class CharactersOverview extends React.Component {

  render() {
    const { isLoading, errorMessage, filteredCharacters, searchInput, filterCharacters } = this.props;

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    else return (
      <>
        {
          (
            <div className='characters-overview-page'>
              <Header />
              <SearchBar type='character' searchInput={searchInput} onInputChange={filterCharacters} />
              <CharacterList filteredCharacters={filteredCharacters} />
            </div>
          )
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.character.errorMessage,
  isLoading: state.character.isLoading,
  filteredCharacters: state.character.filteredCharacters,
  searchInput: state.character.searchInput
});

const mapDispatchToProps = dispatch => ({
  filterCharacters: (searchInput) => dispatch(filterCharacters(searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersOverview);