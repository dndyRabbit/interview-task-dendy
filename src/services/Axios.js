// import axios from "axios";
// import { getAccessToken, getRefreshToken } from "../utils/token";

// const axiosAPI = axios.create({
//   baseURL: "http://103.183.74.178:8888/api/v1/",
//   headers: {
//     Authorization: `Bearer ${getAccessToken()}`,
//     "Content-Type": "application/json;charset=UTF-8",
//   },
//   mode: "cors",
// });

// axiosAPI.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// axiosAPI.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// export default axiosAPI;

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { getAccessToken } from "../utils/token";

/**
 * Service to call HTTP request via Axios
 */

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = "http://103.183.74.178:8888/api/v1/";

    // SET DEFAULT HEADER
    this.setHeader();
    // INTERCEPTOR RESPONSE
    Vue.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async function (error) {
        if (typeof error.response == "undefined") {
          // network error
          let errorStatus = {
            status: "failed",
            statusText: "Network Error",
          };
          return Promise.reject(errorStatus);
        } else if (error.response.status === 401) {
          localStorage.clear();
          return Promise.reject(error);
        } else if (error.response.status === 405) {
          let errorStatus = {
            status: "bad request",
            statusText: "Method Not Allowed!",
          };
          return Promise.reject(errorStatus);
        } else if (
          error.response.status === 502 ||
          error.response.status === 503 ||
          error.response.status === 504 ||
          error.response.status === 501
        ) {
          let errorStatus = {
            status: "failed",
            statusText: "There's Something Wrong With Server",
          };
          return Promise.reject(errorStatus);
        }

        // return Error object with Promise
        return Promise.reject(error);
      }
    );
  },

  /**
   * Set the default HTTP request headers
   */
  setHeader: async () => {
    try {
      // Vue.axios.defaults.headers.common[
      //   "user_key"
      // ] = await userKey;
      Vue.axios.defaults.headers.common = {
        Authorization: `Bearer ${getAccessToken()}`,
      };
      // const response = await Vue.axios.defaults.headers.common[
      //   "user_key"
      // ]
    } catch (error) {
      console.log(error);
    }
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch((error) => {
      throw new Error(`[KT] ApiService ${error}`);
    });
  },

  /**
   * Send the GET HTTP request for Blob type
   * @param resource
   * @param slug
   * @returns {*}
   */
  blob(resource) {
    let headers = { method: "GET", url: resource };
    headers["responseType"] = "blob";
    return Vue.axios(headers);
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource) {
    return Vue.axios.get(`${resource}`).catch((error) => {
      // throw new Error(`[KT] ApiService ${error}`);
      return error;
    });
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch((error) => {
      // throw new Error(`[RWV] ApiService ${error}`);
      throw error;
    });
  },
};

export default ApiService;
