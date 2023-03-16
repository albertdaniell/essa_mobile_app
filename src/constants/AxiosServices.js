
const axios = require("axios");

//get service
const AxiosGetService = async (url) => {
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  const promise = axios.get(url, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//post service
const AxiosPostService = async (url, data) => {
  // console.log(data, 'IN AXIOS');
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  const promise = axios.post(url, data, headers);
  const dataPromise = promise.then((response) => response);
  // console.log({dataPromise})
  return dataPromise;
};

// End of post

//put request
const AxiosPutService = async (url, data) => {
  let headers = {
    "Content-Type": "multipart/form-data",
  };

  // console.log(data);
  const promise = axios.put(url, data, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//delete request
const AxiosDeleteService = async (url) => {
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  const promise = axios.delete(url, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

export {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
  AxiosDeleteService,
};
