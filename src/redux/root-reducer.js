import { combineReducers } from 'redux';
import characterReducer from './character/character.reducer';
import houseReducer from './house/house.reducer';

const rootReducer = combineReducers({
  house: houseReducer,
  // spell: spellReducer,
  character: characterReducer
});

export default rootReducer;