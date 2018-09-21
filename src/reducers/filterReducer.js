const initialState = {
  cart: []
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_COSTLY_ITEM":
      console.log(action.payload.cartItems);
      return {
        cart: state.cart.filter(item => item.cost >= action.payload.filterValue)
      };
    default:
      return state;
  }
};
