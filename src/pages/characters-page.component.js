import React from 'react'
import { Route } from 'react-router-dom';
import CharactersOverview from '../components/characters-overview.component';
import CharacterDetails from '../components/character-details.component';

const CharactersPage = ({ match }) => {
  return (
    <div className='characters-page'>
      <Route exact path={`${match.path}`} component={CharactersOverview} />
      <Route path={`${match.path}/:characterName`} component={CharacterDetails} />
    </div>
  );
}

export default CharactersPage;