import {
  FETCH_SPELLS_START,
  FETCH_SPELLS_SUCCESS,
  FETCH_SPELLS_FAILURE,
  FILTER_SPELLS
} from './spell.types';

import spellsWithImage from '../../utils/spells_images';
import potterapi, { KEY } from '../../apis/potterapi';

export const fetchSpellsStart = () => ({
  type: FETCH_SPELLS_START
});

export const fetchSpellsSuccess = Spells => ({
  type: FETCH_SPELLS_SUCCESS,
  payload: Spells
});

export const fetchSpellsFailure = errorMessage => ({
  type: FETCH_SPELLS_FAILURE,
  payload: errorMessage
});

export const filterSpells = searchInput => ({
  type: FILTER_SPELLS,
  payload: searchInput
});

export const fetchSpellsStartAsync = () => dispatch => {
  dispatch(fetchSpellsStart());
  potterapi.get('/spells', {
    params: {
      key: KEY
    }
  })
    .then(res => {
      let updatedSpells = res.data.map(spell => {
        let spellWithImage = spellsWithImage.find(spellWithImage => spellWithImage.name.trim() === spell.spell.trim());
        return spellWithImage ? { ...spell, ...spellWithImage } : spell;
      })
      dispatch(fetchSpellsSuccess(updatedSpells));
    })
    .catch(err => dispatch(fetchSpellsFailure(err)));
}