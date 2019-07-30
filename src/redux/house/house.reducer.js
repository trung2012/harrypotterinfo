import {
  FETCH_HOUSES_START,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE
} from './house.types';

const initialState = {
  houses: [],
  isLoading: false,
  errorMessage: null
}

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSES_START:
      return { ...state, isLoading: true }
    case FETCH_HOUSES_SUCCESS:
      return { ...state, isLoading: false, houses: action.payload }
    case FETCH_HOUSES_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state;
  }
}

export default houseReducer;