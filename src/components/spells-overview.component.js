import React from 'react';
import { connect } from 'react-redux';
import SpellCard from './spell-card.component';
import SearchBar from './searchbar.component';
import Spinner from './spinner.component';
import { fetchSpellsStartAsync, filterSpells } from '../redux/spell/spell.actions';

import './spells-overview.styles.scss';

class SpellsOverview extends React.Component {
  state = {
    spells: [],
    searchInput: '',
    isLoading: false,
    errorMessage: ''
  }

  componentDidMount() {
    this.props.fetchSpellsStartAsync();
  }

  render() {
    const { searchInput, isLoading, errorMessage, filteredSpells, filterSpells } = this.props;

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    else return (
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
        <SearchBar type='spell' searchInput={searchInput} onInputChange={filterSpells} />
        <div className='spells-overview'>
          {
            filteredSpells.length ?
              filteredSpells.map(({ _id, ...otherProps }) => (
                <div key={_id} className='spells-overview-grid-item'>
                  <SpellCard key={_id} {...otherProps} />
                </div>)
              )
              : <h1>No Spells Found</h1>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.spell.errorMessage,
  isLoading: state.spell.isLoading,
  filteredSpells: state.spell.filteredSpells,
  searchInput: state.spell.searchInput
});

const mapDispatchToProps = dispatch => ({
  fetchSpellsStartAsync: () => dispatch(fetchSpellsStartAsync()),
  filterSpells: (searchInput) => dispatch(filterSpells(searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellsOverview);