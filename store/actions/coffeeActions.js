import * as actionTypes from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://coffee.q8fawazo.me/api/?format=json"
    );
    const coffeeShops = response.data;
    dispatch({
      type: actionTypes.GET_COFFEESHOPS,
      payload: coffeeShops
    });
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: actionTypes.COFFEESHOPS_LOADING
  };
};
