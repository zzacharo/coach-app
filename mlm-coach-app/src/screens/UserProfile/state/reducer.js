import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from "./types";

const initialState = {
  loading: true,
  data: {},
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOADING:
      return { loading: true, data: {} };
    case GET_USER_SUCCESS:
      return { loading: false, data: action.payload, error: false };
    case GET_USER_ERROR:
      return { loading: false, data: action.payload, error: true };
    default:
      return state;
  }
};
