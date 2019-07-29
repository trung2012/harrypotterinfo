import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import { mapDataToHouse } from '../utils/helper';
import Spinner from './spinner.component';
import HouseOverviewItem from './houses-overview-item.component'

import './houses-overview.styles.scss';

class HousesOverview extends React.Component {
  state = {
    houses: [],
    isLoading: false,
    errorMessage: ''
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      potterapi.get('/houses', {
        params: {
          key: KEY
        }
      })
        .then(res => this.setState({ houses: res.data, isLoading: false }))
        .catch(err => this.setState({ errorMessage: 'Oops something went wrong', isLoading: false }));
    })
  }

  render() {
    const { houses, errorMessage, isLoading } = this.state;

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    return (
      <div className='houses-overview'>
        {
          houses.map(house => {
            const imageUrl = mapDataToHouse(house.name) ? mapDataToHouse(house.name).imageUrl : null;
            return <HouseOverviewItem
              key={house._id}
              imageUrl={imageUrl}
              name={house.name}
            />
          })
        }
      </div>
    );
  }
}

export default HousesOverview;