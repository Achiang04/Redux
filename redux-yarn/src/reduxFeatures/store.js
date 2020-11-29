import {createStore} from 'redux';
import cakeReducers from './cakes/cakeReducers';

const store = createStore(cakeReducers);

export default store;
