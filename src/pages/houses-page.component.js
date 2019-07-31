import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HouseOverview from '../components/houses-overview.component';
import HouseDetails from '../components/house-details.component';
import Header from '../components/header.component';

const HousesPage = ({ match }) => {
  return (
    <div className='houses-page'>
      <Header />
      <Switch>
        <Route exact path={`${match.path}`} component={HouseOverview} />
        <Route path={`${match.path}/:houseName`} component={HouseDetails} />
      </Switch>
    </div>

  );
}

export default HousesPage;