const axiosClient = require("./axiosInstance");
const { BACKGROUND_JOB_SERVICE } = require("../config");
const baseUrl = BACKGROUND_JOB_SERVICE;
const holidayApi = {
  getAll: () => {
    const url = baseUrl + "/api/holidays";
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = baseUrl + "/api/holidays";
    return axiosClient.post(url, data);
  },
  getOne: (id) => {
    const url = baseUrl + `/api/holidays/${id}`;
    return axiosClient.get(url);
  },
  delete: (id) => {
    const url = baseUrl + `/api/holidays/${id}`;
    return axiosClient.delete(url);
  },
  update: (data) => {
    const url = baseUrl + `/api/holidays/${data.id}`;
    return axiosClient.put(url, data);
  },
};

module.exports = holidayApi;
