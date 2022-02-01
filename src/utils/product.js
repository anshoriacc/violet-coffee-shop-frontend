import axios from "axios";

export const getFavorite = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/product?category=favorite`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};

export const addProduct = (accessToken, body) => {
  const URL = `${process.env.REACT_APP_HOST}/product/createproduct`;
  return axios.post(URL, body, { headers: { "x-access-token": accessToken } });
};
