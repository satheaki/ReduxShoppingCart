//export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product, cost, quantity, currency) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product,
      cost,
      quantity,
      currency
    }
  };
};

export const deleteItemFromCart = product => {
  return {
    type: "DELETE_FROM_CART",
    payload: {
      product
    }
  };
};

export const updateItemQuantityCart = (product, cost, quantity, currency) => {
  return {
    type: "UPDATE_FROM_CART",
    payload: {
      product,
      cost,
      quantity,
      currency
    }
  };
};
