import {combineReducers} from 'redux';
import cakeReducers from './cakes/cakeReducers';
import colaReducers from './cola/colaReducers';
import iceCreamReducers from './iceCream/iceCreamReducers';
import userReducers from './user/userReducers';

const rootReducer = combineReducers({
  cake: cakeReducers,
  iceCream: iceCreamReducers,
  cola: colaReducers,
  user: userReducers,
});

export default rootReducer;
