import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FILTER_CHARACTERS
} from './characters.types';
import potterapi, { KEY } from '../../apis/potterapi';

export const fetchCharactersStart = () => ({
  type: FETCH_CHARACTERS_START
});

export const fetchCharactersSuccess = characters => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters
});

export const fetchCharactersFailure = errorMessage => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: errorMessage
});

export const fetchCharactersStartAsync = () => dispatch => {
  dispatch(fetchCharactersStart());
  potterapi.get('/characters', {
    params: {
      key: KEY
    }
  })
    .then(res => dispatch(fetchCharactersSuccess(res.data)))
    .catch(err => dispatch(fetchCharactersFailure(err)));
}

export const filterCharacters = searchInput => ({
  type: FILTER_CHARACTERS,
  payload: searchInput
});
