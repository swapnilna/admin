import axios from "axios";

import {
  errorHandler,
  requestInterceptor,
  successHandler,
} from "./interceptors";

// request interceptor
axios.interceptors.request.use((request) => requestInterceptor(request));
// response interceptor
axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default class Request {
  /**
   * Getter function to get API URL.
   *
   * @returns {string}
   */
  static get apiUrl() {
    return "https://dummyjson.com";
  }

  static get = (url, queryParams = {}) => {
    const params = new URLSearchParams(queryParams).toString();

    const fullUrl = `${this.apiUrl}${url}?${params}`;

    const options = {
      headers: { Accept: "application/json" },
    };

    return axios.get(fullUrl, options);
  };

  static post = (url, body) => {
    const options = {
      headers: { Accept: "application/json" },
    };
    const fullUrl = `${this.apiUrl}${url}`;

    return axios.post(fullUrl, body, options);
  };
}
