const axiosClient = require("./axiosInstance");
const { SIGNATURE_SERVICE } = require("../config");
const baseUrl = SIGNATURE_SERVICE;

const signatureApi = {
  sign: (data) => {
    const url = baseUrl + "/api/file/rectangle";
    return axiosClient.put(url, data);
  },
};

module.exports = signatureApi;
