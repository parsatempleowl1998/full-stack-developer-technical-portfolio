import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";

import {
  fetchProductDetailsReducer,
  listProductsReducer,
} from "./reducers/productReducers";


const reducer = combineReducers({
  login: userLoginReducer,
  logout: userLogoutReducer,
  productList: listProductsReducer,
  productDetails: fetchProductDetailsReducer,
});


const userInfoFromLocalStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const productsFromLocalStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  products: productsFromLocalStorage,
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store
