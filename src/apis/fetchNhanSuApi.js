const axiosClient = require("./axiosInstance");

const { URL_FETCH_USER } = require("../config");

const apiNhanSu = {
  getAll: () => {
    const url = URL_FETCH_USER;
    return axiosClient.get(url);
  },
};

module.exports = apiNhanSu;
