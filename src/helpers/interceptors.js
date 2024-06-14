export const requestInterceptor = (request) => {
  return request;
};

// response interceptor function for error
export const errorHandler = (error) => {
  return Promise.reject({ ...error });
};

// response interceptor function for success
export const successHandler = (response) => {
  return response;
};
