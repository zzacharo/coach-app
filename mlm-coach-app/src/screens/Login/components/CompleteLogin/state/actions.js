import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";
import { login as apiLogin } from "./api";
import { serializeLoginResponse } from "./selectors";

import {
  createUserSession,
  cleanUserSession
} from "rides/src/components/UserSession/state/actions";

const _cleanUserSession = dispatch => {
  try {
    dispatch(cleanUserSession());
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const _createUserSession = (dispatch, token, userId) => {
  try {
    dispatch(createUserSession(token, userId));
  } catch (error) {
    console.error(error);
    _cleanUserSession(dispatch);
  }
};

export const login = oAuthCode => {
  return async dispatch => {
    dispatch({
      type: LOGIN_LOADING
    });

    const response = await apiLogin(oAuthCode).catch(async (reason) => {
      console.error(reason);
      await _cleanUserSession();
      dispatch({ type: LOGIN_ERROR, payload: reason });
    });
    if (!response) return;

    const serializedResponse = serializeLoginResponse(response.data);
    console.debug("API Login response", serializedResponse);

    // TODO: it would be nice to have the Auth component to react to a SUCCESS instead
    // of performing this update here
    _createUserSession(dispatch, serializedResponse.token, serializedResponse.userId);

    dispatch({
      type: LOGIN_SUCCESS
    });
  };
};
