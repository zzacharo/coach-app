import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";

const initialState = {
  loading: true,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { loading: true, error: false, data: {} };
    case LOGIN_SUCCESS:
      return { loading: false, error: false, data: {} };
    case LOGIN_ERROR:
      return { loading: false, error: true, data: action.payload };
    default:
      return state;
  }
};
