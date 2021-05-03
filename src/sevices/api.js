import axios from "axios";
import {HttpCode} from "../enum";

const BACKEND_URL = `https://5.react.pages.academy/wtw/`;
const REQUEST_TIMEOUT = 5000;

const httpCode = {
  UNAUTHORIZED: HttpCode.UNAUTHORIZED
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });


  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === httpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;

};

