export const setDeliveryItem = (item) => {
  return {
    type: "SET_DELIVERY_FULFILLED",
    payload: item,
  };
};

export const deletDeliveryItem = () => {
  return {
    type: "DEL_DELIVERY_FULFILLED",
  };
};
