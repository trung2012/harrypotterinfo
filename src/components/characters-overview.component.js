import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import CharacterCard from './character-card.component';


import './characters-overview.styles.scss';

class CharactersOverview extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    potterapi.get('/characters', {
      params: {
        key: KEY
      }
    })
      .then(res => this.setState({ characters: res.data }));
  }

  render() {
    return (
      <div className='characters-overview'>
        {
          this.state.characters.map(({ name, role, bloodStatus }) => (
            <div className='characters-overview-grid-item'>
              <CharacterCard name={name} role={role} bloodStatus={bloodStatus} />
            </div>)
          )
        }
      </div>
    );
  }
}

export default CharactersOverview;