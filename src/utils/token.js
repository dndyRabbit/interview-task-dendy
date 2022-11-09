export const setAccessToken = (payload) => {
  return localStorage.setItem("access_token", payload);
};

export const setRefreshToken = (payload) => {
  return localStorage.setItem("refresh_token", payload);
};

export const getAccessToken = () => {
  return localStorage.getItem("access_token") ?? "";
};
export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token") ?? "";
};
