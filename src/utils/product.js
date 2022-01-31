import axios from "axios"

export const getFavorite = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/product?category=favorite`
  return axios.get(URL, { headers: { "x-access-token": accessToken } })
}
