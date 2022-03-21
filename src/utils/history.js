import axios from 'axios';

export const getHistory = (accessToken) => {
  const URL = `${
    process.env.REACT_APP_HOST
  }/payment/payment-userId?per_page=15&page=1`;
  return axios.get(URL, {headers: {'x-access-token': accessToken}});
};

export const deleteHistory = (accessToken, id) => {
  const URL = `${process.env.REACT_APP_HOST}/payment/${id}`;
  return axios.delete(URL, {headers: {'x-access-token': accessToken}});
};
