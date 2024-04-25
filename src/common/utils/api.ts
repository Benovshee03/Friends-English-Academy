import axios from "axios";
import qs from "qs";
import AppConsts from "../../library/Appconsts";
import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptor";

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  headers: {
    "Content-Type": "application/json",
    // "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWVkZWM1MmVlMWUwNWJhNzE5MDg4ZWMiLCJpYXQiOjE3MTAwOTE4MDgsImV4cCI6MTcxMTgxOTgwOH0.Yd6I2vUS9J7g2N0q6GIa67M6Nmp4DGieH2UcBHGB0UE"
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { encode: false });
  },
});

http.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
http.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default http;