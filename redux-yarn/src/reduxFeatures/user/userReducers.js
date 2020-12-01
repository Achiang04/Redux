import * as type from './userType';

const initialState = {
  loading: false,
  users: [],
  error: '',
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
        error: '',
      };
    case type.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

export default userReducers;
