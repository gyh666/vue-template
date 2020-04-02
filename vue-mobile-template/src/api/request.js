import service from "./http";

const request = {
  get(url) {
    return new Promise((resolve, reject) => {
      service
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default request;
