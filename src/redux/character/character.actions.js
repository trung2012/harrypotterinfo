import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FILTER_CHARACTERS
} from './character.types';

import charactersWithImage from '../../utils/characters_images';
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

export const filterCharacters = searchInput => ({
  type: FILTER_CHARACTERS,
  payload: searchInput
});

export const fetchCharactersStartAsync = () => dispatch => {
  dispatch(fetchCharactersStart());
  potterapi.get('/characters', {
    params: {
      key: KEY
    }
  })
    .then(res => {
      let updatedCharacters = res.data.map(character => {
        let characterWithImage = charactersWithImage.find(characterWithImage => characterWithImage.name === character.name);
        return characterWithImage ? { ...character, ...characterWithImage } : character;
      })
      dispatch(fetchCharactersSuccess(updatedCharacters));
    })
    .catch(err => dispatch(fetchCharactersFailure(err)));
}