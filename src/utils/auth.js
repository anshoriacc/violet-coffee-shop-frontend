import axios from "axios";

export const login = (body) => {
  const URL = `${process.env.REACT_APP_HOST}/auth/login`;
  return axios.post(URL, body);
};

export const register = (body) => {
  const URL = `${process.env.REACT_APP_HOST}/auth/signup`;
  return axios.post(URL, body);
};

export const logout = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/auth/logout`;
  return axios.delete(URL, { headers: { "x-access-token": accessToken } });
};
