import axios from "axios";

export const editPromo = (id, body, token) => {
  const url = `${process.env.REACT_APP_HOST}/promo/${id}`;
  return axios.patch(url, body, { headers: { "x-access-token": token } });
};

export const addPromoApi = (token, body) => {
  const url = `${process.env.REACT_APP_HOST}/promo/createpromo`;
  return axios.post(url, body, { headers: { "x-access-token": token } });
};
