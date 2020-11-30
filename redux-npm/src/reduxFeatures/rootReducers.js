import {combineReducer} from 'redux';
import cakeReducers from './cakes/cakeReducers';
import colaReducers from './cola/colaReducers';
import iceCreamReducers from './iceCream/iceCreamReducers';

const rootReducer = combineReducer({
  cake: cakeReducers,
  iceCream: iceCreamReducers,
  cola: colaReducers,
});

export default rootReducer;
