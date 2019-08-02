import React from 'react';

import { withRouter } from 'react-router-dom';
import { generateHouseColor } from '../utils/helper';

const HousesOverviewItem = ({ imageUrl, name, history, match }) => {
  return (
    <div className='house' onClick={() => history.push(`${match.path}/${name}`)} style={{ color: `${generateHouseColor(name)}` }} >
      <div className='house-image-container'>
        <img src={imageUrl} alt='house' className='house-image' />
      </div>
      <div className='house-name'>{name}</div>
    </div>
  );
}

export default withRouter(HousesOverviewItem);