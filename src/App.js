import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import HousesPage from './pages/houses-page.component';
import CharactersPage from './pages/characters-page.component';
import SortingHatPage from './pages/sortinghat-page.component';
import SpellsPage from './pages/spells-page.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/characters' component={CharactersPage} />
          <Route path='/houses' component={HousesPage} />
          <Route path='/spells' component={SpellsPage} />
          <Route exact path='/sortinghat' component={SortingHatPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
