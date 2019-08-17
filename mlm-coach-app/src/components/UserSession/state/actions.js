import { NEW_USER_SESSION, USER_SESSION_CLEANED } from "./types";
import { get as apiGet, set as apiSet, remove as apiRemove } from "./api";

export const getUserSession = () => {
  return async dispatch => {
    let session = null;
    try {
      session = apiGet();
    } catch (error) {
      console.error(error);
      throw error;
    }

    dispatch({
      type: NEW_USER_SESSION,
      payload: session
    });
  };
};

export const createUserSession = (token, userId) => {
  return async dispatch => {
    const session = { token: token, userId: userId };
    try {
      apiSet(session);
    } catch (error) {
      console.error(error);
      throw error;
    }

    dispatch({ type: NEW_USER_SESSION, payload: session });
  };
};

export const cleanUserSession = () => {
  return async dispatch => {
    try {
      apiRemove();
    } catch (error) {
      console.error(error);
      throw error;
    }

    dispatch({
      type: USER_SESSION_CLEANED
    });
  };
};
