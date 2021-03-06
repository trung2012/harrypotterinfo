import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FILTER_CHARACTERS,
  RESET_SEARCH_INPUT
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

export const resetSearchInput = () => ({
  type: RESET_SEARCH_INPUT
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
        let characterWithImage = charactersWithImage.find(characterWithImage => characterWithImage.name.trim() === character.name.trim());
        return characterWithImage ? { ...character, ...characterWithImage } : character;
      })
      dispatch(fetchCharactersSuccess(updatedCharacters));
    })
    .catch(err => dispatch(fetchCharactersFailure(err)));
}