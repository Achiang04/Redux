import * as type from './userType';

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case type.FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// function userReducers(state = initialState, action) {
//   switch (action.type) {
//     case type.FETCH_USERS_REQUEST:
//       return Object.assign({}, state, {
//         loading: true,
//       });
//     case type.FETCH_USERS_SUCCESS:
//       return Object.assign({}, state, {
//         loading: false,
//         users: action.payload,
//       });
//     case type.FETCH_USERS_FAILURE:
//       return Object.assign({}, state, {
//         loading: false,
//         error: action.payload,
//       });
//     default:
//       return state;
//   }
// }

export default userReducers;
