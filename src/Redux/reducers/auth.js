const initialState = {
  userData: {},
  token: "",
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_FULFILLED":
      return {
        ...state,
        token: action.payload,
      };

    case "SET_USER_FULFILLED":
      return {
        ...state,
        userData: action.payload,
      };
    case "DEL_USER_FULFILLED":
      return {
        ...state,
        userData: {},
        token: "",
      };
      case "FORGOT_PASSWORD_FULFILLED":
        return {
          ...state,
        };
    default:
      return state;
  }
};

export default userData;
