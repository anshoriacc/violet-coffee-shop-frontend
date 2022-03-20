import axios from "axios";

export const userCheckOut = (body, token) => {
  const URL = `${process.env.REACT_APP_HOST}/payment/createpayment`;
  return axios.post(URL, body, { headers: { "x-access-token": token } });
};
