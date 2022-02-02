import axios from "axios";

export const GetHistory = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/payment/payment-userId?per_page=15&page=1`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};
