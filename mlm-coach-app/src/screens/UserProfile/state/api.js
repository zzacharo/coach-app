import Config from "react-native-config";
import ApiService from "rides/src/api";

export const getCurrentUser = userId => {
  return ApiService.get(Config.API_USER + `/${userId}`);
};
