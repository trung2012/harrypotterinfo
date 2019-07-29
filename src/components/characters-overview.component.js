import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import CharacterCard from './character-card.component';
import SearchBar from './searchbar.component';
import Spinner from './spinner.component';

import './characters-overview.styles.scss';

class CharactersOverview extends React.Component {
  state = {
    characters: [],
    searchInput: ''
  }

  componentDidMount() {
    potterapi.get('/characters', {
      params: {
        key: KEY
      }
    })
      .then(res => this.setState({ characters: res.data }));
  }

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { characters, searchInput } = this.state;
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchInput))
    return (
      <>
        {
          filteredCharacters.length
            ? (
              <div className='characters-page'>
                <SearchBar type='character' searchInput={this.state.searchInput} onInputChange={this.onInputChange} />
                <div className='characters-overview'>
                  {
                    filteredCharacters.map(({ _id, name, role, bloodStatus }) => (
                      <div key={_id} className='characters-overview-grid-item'>
                        <CharacterCard key={_id} name={name} role={role} bloodStatus={bloodStatus} />
                      </div>)
                    )
                  }
                </div>
              </div>
            )
            : <Spinner />
        }
      </>
    );
  }
}

export default CharactersOverview;