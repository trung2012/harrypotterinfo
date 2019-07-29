import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import CharacterCard from './character-card.component';
import SearchBar from './searchbar.component';
import Spinner from './spinner.component';

import './characters-overview.styles.scss';

class CharactersOverview extends React.Component {
  state = {
    characters: [],
    searchInput: '',
    isLoading: false,
    errorMessage: ''
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      potterapi.get('/characters', {
        params: {
          key: KEY
        }
      })
        .then(res => this.setState({ characters: res.data, isLoading: false }))
        .catch(err => this.setState({ errorMessage: 'Oops something went wrong', isLoading: false }));
    })

  }

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { characters, searchInput, isLoading, errorMessage } = this.state;
    const filteredCharacters = characters.filter(character => {
      if (character.alias) {
        return character.name.toLowerCase().includes(searchInput) || character.alias.toLowerCase().includes(searchInput);
      }
      return character.name.toLowerCase().includes(searchInput)
    })

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    else return (
      <>
        {
          filteredCharacters.length
            ? (
              <div className='characters-page'>
                <SearchBar type='character' searchInput={this.state.searchInput} onInputChange={this.onInputChange} />
                <div className='characters-overview'>
                  {
                    filteredCharacters.map(({ _id, ...otherProps }) => (
                      <div key={_id} className='characters-overview-grid-item'>
                        <CharacterCard key={_id} {...otherProps} />
                      </div>)
                    )
                  }
                </div>
              </div>
            )
            : <div>
              <SearchBar type='character' searchInput={this.state.searchInput} onInputChange={this.onInputChange} />
              <h1>No Characters Found</h1>
            </div>
        }
      </>
    );
  }
}

export default CharactersOverview;