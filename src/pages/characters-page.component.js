import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CharactersOverview from '../components/characters-overview.component';
import CharacterDetails from '../components/character-details.component';

const CharactersPage = ({ match }) => {
  return (
    <div className='characters-page'>
      <Switch>
        <Route exact path={`${match.path}`} component={CharactersOverview} />
        <Route path={`${match.path}/:characterName`} component={CharacterDetails} />
      </Switch>
    </div>
  );
}

export default CharactersPage;