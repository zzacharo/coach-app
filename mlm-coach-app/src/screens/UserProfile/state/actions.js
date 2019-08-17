import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from "./types";
import { getCurrentUser as apiGetCurrentUser } from "./api";
import { serializeUserProfileResponse } from "./selectors";

export const getCurrentUser = userId => {
  return async dispatch => {
    dispatch({ type: GET_USER_LOADING, payload: {} });

    const response = await apiGetCurrentUser(userId).catch(reason => {
      console.error(reason);
      dispatch({ type: GET_USER_ERROR, payload: reason });
    });

    const userProfile = serializeUserProfileResponse(response.data);
    dispatch({ type: GET_USER_SUCCESS, payload: userProfile });
  };
};
