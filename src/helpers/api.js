/* import apiClient from "./interceptors1";

const options = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// Common GET method
const get = async (url, queryParams) => {
  let queryString = "";
  if (queryParams) {
    queryString = Object.entries(queryParams)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
  }

  url = `${url}${queryString ? "?" + queryString : ""}`;

  return await apiClient.get(url, {}, options);
};

// Common POST method
const post = async (url, body) => {
  return await apiClient.post(url, body, options);
};

// Common PUT method
const put = async (url, data) => {
  return apiClient.put(url, data);
};

// Common DELETE method
const del = async (url) => {
  await apiClient.delete(url);
};

export { get, post, put, del };
 */