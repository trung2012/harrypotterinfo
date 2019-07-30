import React from 'react';
import { connect } from 'react-redux';

import Spinner from './spinner.component';
import HouseOverviewItem from './houses-overview-item.component'
import { fetchHousesStartAsync } from '../redux/house/house.actions';
import './houses-overview.styles.scss';

class HousesOverview extends React.Component {

  componentDidMount() {
    this.props.fetchHousesStartAsync();
  }

  render() {
    const { houses, errorMessage, isLoading } = this.props;

    if (errorMessage) return <h1>{errorMessage}</h1>
    else if (isLoading) return <Spinner />
    return (
      <div className='houses-overview'>
        {
          houses.map(({ _id, ...otherProps }) => {
            return <HouseOverviewItem
              key={_id}
              {...otherProps}
            />
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  houses: state.house.houses,
  isLoading: state.house.isLoading,
  errorMessage: state.house.errorMessage
})

export default connect(mapStateToProps, { fetchHousesStartAsync })(HousesOverview);