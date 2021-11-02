const SET_PRODUCTS = "SET_PRODUCTS";

const initialState = [];

// actions Creators

export const setProducts = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_PRODUCTS,
      payload: data,
    });
  };
};

//

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productsReducer;
