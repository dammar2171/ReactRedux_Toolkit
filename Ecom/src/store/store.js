import {configureStore} from "@reduxjs/toolkit";
import fetchStatusReducer from "./fetchStatusSlice";
import productReducer from "./productSlice"
const store = configureStore({
  reducer:{
    fetchStatus : fetchStatusReducer,
    products : productReducer,
  }
})
export default store;