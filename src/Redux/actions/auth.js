import { doForgotPassword } from "../../utils/auth";

export const loginAction = (token) => {
  return {
    type: "SET_AUTH_FULFILLED",
    payload: token,
  };
};

export const saveAction = (data) => {
  return {
    type: "SET_USER_FULFILLED",
    payload: data,
  };
};

export const logout = () => {
  return {
    type: "DEL_USER_FULFILLED",
  };
};

export const forgotPassword = (param) => {
  return {
    type: "FORGOT_PASSWORD_FULFILLED",
    payload: doForgotPassword(param),
  };
};
