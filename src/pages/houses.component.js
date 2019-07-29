import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import { mapImageToHouse } from '../utils/helper';
import Spinner from '../components/spinner.component';

import './houses.styles.scss';

class HousesPage extends React.Component {
  state = {
    houses: []
  }

  componentDidMount() {
    potterapi.get('/houses', {
      params: {
        key: KEY
      }
    })
      .then(res => this.setState({ houses: res.data }))
  }

  render() {
    return (
      <>
        {
          this.state.houses.length ?
            <div className='houses-overview'>
              {
                this.state.houses.map(house => {
                  const imageUrl = mapImageToHouse(house.name);
                  return (
                    <div key={house._id} className='house'>
                      <div className='house-image-container'>
                        <img src={imageUrl} alt='house' className='house-image' />
                      </div>
                      <div className='house-name'>{house.name}</div>
                    </div>
                  );
                })
              }
            </div>
            : <Spinner />
        }

      </>
    );
  }
}

export default HousesPage;