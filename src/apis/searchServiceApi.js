const axiosClient = require("./axiosInstance");
const { SEARCH_SERVICE } = require("../config");
const baseUrl = SEARCH_SERVICE;
const searchServiceApi = {
  getAll: (params) => {
    const url = baseUrl + "/users";
    return axiosClient.get(url, { params });
  },
  FetchUser: () => {
    const url = baseUrl + "/update";
    return axiosClient.get(url);
  },
  CreatePost: (data) => {
    const url = baseUrl + "/post";
    return axiosClient.post(url, data);
  },
  Search: (params) => {
    const url = baseUrl + "/posts";
    return axiosClient.get(url, { params });
  },
};
module.exports = searchServiceApi;
