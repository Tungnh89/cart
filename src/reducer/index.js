const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ITEM": {
      return { ...state, cart: [] };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }
    case "INCREATE_ITEM": {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem._id === action.payload) {
          //   console.log(typeof cartItem._id);
          //   console.log(typeof cartItem.count + 1);
          return { ...cartItem };
        }
      });
      return { ...state, cart: tempCart };
    }

    default:
      return state;
  }
};

export default reducer;
