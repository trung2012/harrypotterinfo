import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FILTER_CHARACTERS,
  RESET_SEARCH_INPUT
} from './character.types';
import { filterDataWithInput } from '../../utils/helper';

const initialState = {
  characters: [],
  searchInput: '',
  isLoading: false,
  errorMessage: '',
  filteredCharacters: []
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return { ...state, isLoading: true };
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, isLoading: false, characters: action.payload, filteredCharacters: action.payload };
    case FETCH_CHARACTERS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    case FILTER_CHARACTERS:
      return { ...state, searchInput: action.payload, filteredCharacters: filterDataWithInput(state.characters, action.payload) }
    case RESET_SEARCH_INPUT:
      return { ...state, searchInput: '', filteredCharacters: [...state.characters] }
    default:
      return state;
  }
};

export default characterReducer;