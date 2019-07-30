import React from 'react';
import { connect } from 'react-redux';

import CharacterCard from './character-card.component';
import SearchBar from './searchbar.component';
import Spinner from './spinner.component';
import { fetchCharactersStartAsync, filterCharacters } from '../redux/character/character.actions';


import './characters-overview.styles.scss';

class CharactersOverview extends React.Component {

  componentDidMount() {
    this.props.fetchCharactersStartAsync();
  }

  render() {
    const { isLoading, errorMessage, filteredCharacters, searchInput, filterCharacters } = this.props;

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    else return (
      <>
        {
          (
            <div className='characters-page'>
              <SearchBar type='character' searchInput={searchInput} onInputChange={filterCharacters} />
              <div className='characters-overview'>
                {
                  filteredCharacters.length ?
                    filteredCharacters.map(({ _id, name, ...otherProps }) => {
                      return (
                        <div key={_id} className='characters-overview-grid-item'>
                          <CharacterCard key={_id} name={name} {...otherProps} />
                        </div>)
                    }
                    )
                    : <h1>No Characters Found</h1>
                }
              </div>
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
  fetchCharactersStartAsync: () => dispatch(fetchCharactersStartAsync()),
  filterCharacters: (searchInput) => dispatch(filterCharacters(searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersOverview);