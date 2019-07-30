import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
));

export default store;