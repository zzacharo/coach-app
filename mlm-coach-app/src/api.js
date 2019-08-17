import axios from "axios";
import Config from "react-native-config";
import store from "./store";

export default (ApiService = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 10000
}));

// Set the AUTH token for any request if it exists
ApiService.interceptors.request.use(config => {
  const currentToken = store.getState().session.token;
  config.headers.Authorization = currentToken ? `Token ${currentToken}` : "";
  return config;
});
