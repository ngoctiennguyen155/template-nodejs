const axiosClient = require("./axiosInstance");
const { BACKGROUND_JOB_SERVICE } = require("../config");
const baseUrl = BACKGROUND_JOB_SERVICE;
const moment = require("moment");
const nhacMailApi = {
  create: (data) => {
    const url = baseUrl + "/api/backgroundjob/e-approval";
    return axiosClient.post(url, {
      ...data,
      id: data.id + "",
      dateTime: moment(data.dateTime).format("YYYY-MM-DDTHH:mm:ss"),
    });
  },
  delete: (jobId) => {
    const url = baseUrl + `/api/backgroundjob/e-approval?jobId=${jobId}`;
    return axiosClient.delete(url);
  },
  resume: (data) => {
    const url = baseUrl + "/api/backgroundjob/e-approval-resume";
    console.log({ url });
    return axiosClient.post(url, { ...data, id: `${data.id}` });
  },
};

module.exports = nhacMailApi;
