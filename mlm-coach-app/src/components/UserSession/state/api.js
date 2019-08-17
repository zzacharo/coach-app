import { AsyncStorage } from "react-native";

const USER_SESSION_KEY = "USER_SESSION_KEY";

export const get = async () => {
  const value = await AsyncStorage.getItem(USER_SESSION_KEY);
  const result = value ? JSON.parse(value) : { token: null, userId: null };
  console.debug("AsyncStorage GET", USER_SESSION_KEY, result);
  return result;
};

export const set = async value => {
  const stringValue = JSON.stringify(value);
  console.debug("AsyncStorage SET", USER_SESSION_KEY, stringValue);
  await AsyncStorage.setItem(USER_SESSION_KEY, stringValue);
};

export const remove = async () => {
  console.debug("AsyncStorage REMOVE", USER_SESSION_KEY);
  await AsyncStorage.removeItem(USER_SESSION_KEY);
};
