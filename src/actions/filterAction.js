export const filterPricyItem = (cartItems, filterValue) => {
  return {
    type: "FILTER_COSTLY_ITEM",
    payload: {
      cartItems,
      filterValue
    }
  };
};
