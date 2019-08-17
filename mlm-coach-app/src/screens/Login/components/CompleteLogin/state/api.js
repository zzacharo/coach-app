import Config from "react-native-config";
import ApiService from "rides/src/api";

export const login = oAuthCode => {
  return ApiService.post(Config.API_AUTH_LOGIN, {
    auth_code: oAuthCode
  });
};
