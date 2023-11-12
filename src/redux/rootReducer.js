import { combineReducers } from 'redux';
import { cartReducer,favoritesReducer } from './reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
