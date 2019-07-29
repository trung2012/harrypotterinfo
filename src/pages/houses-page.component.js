import React from 'react'
import { Route } from 'react-router-dom';
import HouseOverview from '../components/houses-overview.component';
import HouseDetails from '../components/house-details.component';

const HousesPage = ({ match, history }) => {
  return (
    <div className='houses-page'>
      <Route exact path={`${match.path}`} component={HouseOverview} />
      <Route path={`${match.path}/:houseName`} component={HouseDetails} />
    </div>
  );
}

export default HousesPage;