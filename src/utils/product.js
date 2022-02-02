import axios from "axios";

export const getFavorite = (accessToken) => {
  const URL = `${
    process.env.REACT_APP_HOST
  }/product?per_page=3&page=1&sort=ASC&category=favorite`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};

export const addProduct = (accessToken, body) => {
  const URL = `${process.env.REACT_APP_HOST}/product/createproduct`;
  return axios.post(URL, body, { headers: { "x-access-token": accessToken } });
};

export const getProduct = (category) => {
  const URL = `${
    process.env.REACT_APP_HOST
  }/product?category=${category}&per_page=15&page=1`;
  return axios.get(URL);
};

export const detailProduct = (id) => {
  const URL = `${process.env.REACT_APP_HOST}/product/${id}`;
  return axios.get(URL);
};
