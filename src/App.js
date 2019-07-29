import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import HousesPage from './pages/houses.component';
import Header from './components/header.component';
import CharactersOverview from './components/characters-overview.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/characters' component={CharactersOverview} />
          <Route exact path='/houses' component={HousesPage} />
          {/* <Route path='/spells' component={HomePage} />
          
          <Route exact path='/sortinghat' component={HomePage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
