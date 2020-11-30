import {BUY_CAKE} from './colaTypes';

const initialState = {
  numOfCola: 30,
};

const colaReducers = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCola: state.numOfCola - 1,
      };
    default:
      return state;
  }
};

export default colaReducers;
