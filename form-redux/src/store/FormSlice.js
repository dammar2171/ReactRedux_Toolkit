import { createSlice } from "@reduxjs/toolkit";

const formSlice=createSlice({
  name: "form",
  initialState: [],
  reducers: {
    submitForm: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { submitForm } = formSlice.actions;
export default formSlice.reducer;