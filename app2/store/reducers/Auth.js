import { AUTHENTICATE, DID_TRY_AL, LOGOUT } from "../actions/Auth";

const initialState = {
  token: null,
  userId: null,
  didTryAL: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { token: action.token, userId: action.userId, didTryAL: true };
    case LOGOUT:
      return { ...state, didTryAL: true };
    case DID_TRY_AL:
      return { ...state, didTryAL: true };
    default:
      return state;
  }
};
