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

export const GetUser = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/user/profile`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};

export const editUser = (data, accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/user/edit`;
  return axios.patch(URL, data, { headers: { "x-acess-token": accessToken } });
};
