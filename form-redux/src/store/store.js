import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./FormSlice.js";

const store= configureStore({
  reducer: {
    form:formReducer,
  }
}
);

export default store;