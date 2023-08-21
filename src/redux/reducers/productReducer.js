import ActionTypes from "../Constants/ActionTypes";

const intialState = []

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const  selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state,...payload };

    default:
      return state;
  }
};

