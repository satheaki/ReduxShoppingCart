/*const initialState = {
  cart: [
    {
      product: "The Division PS4-DVD",
      cost: 45,
      quantity: 1,
      currency: "USD"
    },
    {
      product: "Nike Mens Shoes-Running",
      cost: 80,
      quantity: 1,
      currency: "USD"
    }
  ]
};*/

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      };

    case "UPDATE_FROM_CART":
      return {
        ...state,
        cart: state.cart.map(
          item =>
            item.product === action.payload.product ? action.payload : item
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
