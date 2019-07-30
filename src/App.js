import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import HousesPage from './pages/houses-page.component';
import CharactersPage from './pages/characters-page.component';
import Header from './components/header.component';
import SpellsOverview from './components/spells-overview.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/characters' component={CharactersPage} />
          <Route path='/houses' component={HousesPage} />
          <Route path='/spells' component={SpellsOverview} />
          {/*           
          <Route exact path='/sortinghat' component={HomePage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
