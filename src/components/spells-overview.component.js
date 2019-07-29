import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import SpellCard from './spell-card.component';
import SearchBar from './searchbar.component';
import Spinner from './spinner.component';

import './spells-overview.styles.scss';

class SpellsOverview extends React.Component {
  state = {
    spells: [],
    searchInput: '',
    isLoading: false,
    errorMessage: ''
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      potterapi.get('/spells', {
        params: {
          key: KEY
        }
      })
        .then(res => this.setState({ spells: res.data, isLoading: false }))
        .catch(err => this.setState({ errorMessage: 'Oops something went wrong', isLoading: false }));
    })

  }

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { spells, searchInput, isLoading, errorMessage } = this.state;
    const filteredSpells = spells.filter(spell => spell.spell.toLowerCase().includes(searchInput))

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    else return (
      <>
        {
          filteredSpells.length
            ? (
              <div className='spells-page'>
                <div className='spells-page-header'>
                  <div className='spell-description'>
                    <h1 className='spell-description-header'>Spells</h1>
                    <p className='spell-description-content'>
                      A spell is a controlled manifestation of magic that that affects the world in a supernatural fashion, such as levitating objects, conjuring fire or water, or stunning an individual.
                      Generally cast by a witch or a wizard, spells are often produced with an incantation, and may appear as jets of light.
                      Because of this spells can usually miss, be dodged, or blocked, either with an object or another spell.
                      The action of performing a spell is referred to as casting or spellwork.
                    </p>
                  </div>
                  <div className='spells-video-container'>
                    <h3 className='spells-video-header'>Watch all spells from the Harry Potter movies</h3>
                    <iframe
                      title='all spells video'
                      className='spells-video'
                      width="600"
                      height="338"
                      src="https://www.youtube.com/embed/vipmgWMhROk"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>
                <SearchBar type='spell' searchInput={searchInput} onInputChange={this.onInputChange} />
                <div className='spells-overview'>
                  {
                    filteredSpells.map(({ _id, ...otherProps }) => (
                      <div key={_id} className='spells-overview-grid-item'>
                        <SpellCard key={_id} {...otherProps} />
                      </div>)
                    )
                  }
                </div>
              </div>
            )
            : <div>
              <SearchBar type='spell' searchInput={searchInput} onInputChange={this.onInputChange} />
              <h1>No spells Found</h1>
            </div>
        }
      </>
    );
  }
}

export default SpellsOverview;