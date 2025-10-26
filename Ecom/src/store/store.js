import {configureStore} from "@reduxjs/toolkit";
import fetchStatusReducer from "./fetchStatusSlice";
import productReducer from "./productSlice"
import controllerReducer from "./controllerSlice";
import bagReducer from "./BagSlice"
const store = configureStore({
  reducer:{
    fetchStatus : fetchStatusReducer,
    products : productReducer,
    controller : controllerReducer,
    bag : bagReducer,
  }
})
export default store;