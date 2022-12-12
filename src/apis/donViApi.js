const axiosClient = require("./axiosInstance");
const { INTEGRATE_URL } = require("../config");
const baseUrl = INTEGRATE_URL;
const donViApi = {
  get_ds_don_vi: (maDv) => {
    const url = baseUrl + `/api/nhansu/danh-sach-don-vi?maDv=${maDv}`;
    return axiosClient.get(url);
  },
};

module.exports = donViApi;
