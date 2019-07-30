import {
  FETCH_HOUSES_START,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE
} from './house.types';

import housesWithImages from '../../utils/houses_images';
import potterapi, { KEY } from '../../apis/potterapi';

export const fetchHousesStart = () => ({
  type: FETCH_HOUSES_START
});

export const fetchHousesSuccess = houses => ({
  type: FETCH_HOUSES_SUCCESS,
  payload: houses
});

export const fetchHousesFailure = errorMessage => ({
  type: FETCH_HOUSES_FAILURE,
  payload: errorMessage
});

export const fetchHousesStartAsync = () => dispatch => {
  dispatch(fetchHousesStart());
  potterapi.get('/houses', {
    params: {
      key: KEY
    }
  })
    .then(res => {
      let updatedHouses = res.data.map(house => {
        let houseWithImage = housesWithImages.find(houseWithImage => houseWithImage.name === house.name);
        return houseWithImage ? { ...house, ...houseWithImage } : house;
      })
      dispatch(fetchHousesSuccess(updatedHouses));
    })
    .catch(err => dispatch(fetchHousesFailure(err)));
}