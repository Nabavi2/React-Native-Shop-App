import { AUTHENTICATE, DID_TRY_AL, LOGOUT } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  didTryAL: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { token: action.token, userId: action.userId, didTryAL: true };
    case LOGOUT:
      return { ...initialState };
    case DID_TRY_AL:
      return { ...state, didTryAL: true };
    default:
      return state;
  }
};

export default authReducer;
