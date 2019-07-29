import React from 'react';
import potterapi, { KEY } from '../apis/potterapi';
import { mapImageToHouse } from '../utils/helper';
import Spinner from '../components/spinner.component';

import './houses.styles.scss';

class HousesPage extends React.Component {
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
    );
  }
}

export default HousesPage;