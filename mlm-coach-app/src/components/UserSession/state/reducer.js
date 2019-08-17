import { NEW_USER_SESSION, USER_SESSION_CLEANED } from "./types";

const initialState = {
  token: null,
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER_SESSION:
      return { token: action.payload.token, userId: action.payload.userId };
    case USER_SESSION_CLEANED:
      return { ...initialState };
    default:
      return state;
  }
};
