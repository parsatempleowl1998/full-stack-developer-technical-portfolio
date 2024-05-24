import axios from "axios";
import { BACKEND_URL_ENDPOINT, GET_ALL_PRODUCTS_API } from "../constants/backend";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from "../constants/productActionConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_PRODUCTS_API, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data)
          dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: 'Not able to fetch the products',
          });
        }
      });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload: 'Not abl to fetch the products',
    });
  }
};

export const fetchProductDetails = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_PRODUCTS_API+ '/' + productId, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data.data });
        } else {
          dispatch({ type: PRODUCT_DETAILS_FAILURE, payload: res.data.message });
        }
      });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload: err.response.data.message,
    });
  }
};
