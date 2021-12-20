import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  didTryAuthoLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAuthoLogin: true,
      };
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        didTryAuthoLogin: true,
      };
    case LOGOUT:
      return initialState;
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId,
    //   };
    default:
      return state;
  }
};
