import {
  FETCH_SPELLS_START,
  FETCH_SPELLS_SUCCESS,
  FETCH_SPELLS_FAILURE,
  FILTER_SPELLS
} from './spell.types';

import { filterDataWithInput } from '../../utils/helper';

const initialState = {
  spells: [],
  searchInput: '',
  isLoading: false,
  errorMessage: '',
  filteredSpells: []
}

const spellReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPELLS_START:
      return { ...state, isLoading: true };
    case FETCH_SPELLS_SUCCESS:
      return { ...state, isLoading: false, spells: action.payload, filteredSpells: action.payload };
    case FETCH_SPELLS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    case FILTER_SPELLS:
      return { ...state, searchInput: action.payload, filteredSpells: filterDataWithInput(state.spells, action.payload) }
    default:
      return state;
  }
};

export default spellReducer;