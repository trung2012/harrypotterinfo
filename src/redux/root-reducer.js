import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';


import storage from 'redux-persist/lib/storage';
import characterReducer from './character/character.reducer';
import houseReducer from './house/house.reducer';
import spellReducer from './spell/spell.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['house', 'character']
}

const rootReducer = combineReducers({
  house: houseReducer,
  spell: spellReducer,
  character: characterReducer
});

export default persistReducer(persistConfig, rootReducer);