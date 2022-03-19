const initialState = {
  item: [],
};

const deliveryItem = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DELIVERY_FULFILLED":
      return {
        ...state,
        item: action.payload,
      };

    case "DEL_DELIVERY_FULFILLED":
      return {
        ...state,
        item: {},
      };

    default:
      return state;
  }
};

export default deliveryItem;
