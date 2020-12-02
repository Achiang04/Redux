import {combineReducer} from 'redux';
import cakeReducers from './cakes/cakeReducers';
import colaReducers from './cola/colaReducers';
import iceCreamReducers from './iceCream/iceCreamReducers';
import userReducers from './user/userReducers';

const rootReducer = combineReducer({
  cakeReducers,
  iceCreamReducers,
  colaReducers,
  userReducers,
});

export default rootReducer;
