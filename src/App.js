import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import WelcomePage from './pages/welcome.component';
import HomePage from './pages/homepage.component';
import HousesPage from './pages/houses-page.component';
import CharactersPage from './pages/characters-page.component';
import SpellsPage from './pages/spells-page.component';
import SortingHatForm from './components/sortinghat-form/sortinghat-form.component';
import SortingHatFullForm from './components/sortinghat-form/sortinghat-form-full.component';
import { fetchHousesStartAsync } from './redux/house/house.actions';
import { fetchCharactersStartAsync } from './redux/character/character.actions';


import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchHousesStartAsync();
    this.props.fetchCharactersStartAsync();
  }

  componentWillUnmount() {
    window.localStorage.clear();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route path='/characters' component={CharactersPage} />
          <Route path='/houses' component={HousesPage} />
          <Route path='/spells' component={SpellsPage} />
          <Route exact path='/sortinghat' component={SortingHatForm} />
          <Route exact path='/sortinghat/full' component={SortingHatFullForm} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchHousesStartAsync, fetchCharactersStartAsync })(App);
