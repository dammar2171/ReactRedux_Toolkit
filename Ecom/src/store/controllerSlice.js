import { createSlice } from "@reduxjs/toolkit";

const controllerSlice = createSlice({
  name: "controller",
  initialState: {
    initialValue: 1,
  },
  reducers: {
    incrementValue: (state) => {
      state.initialValue += 1;
    },
    decrementValue: (state) => {
      if(state.initialValue > 1){
        state.initialValue -= 1;
      }},
    resetValue:(state)=>{
      state.initialValue =1;
    },
  },

});

export const { incrementValue, decrementValue, resetValue} = controllerSlice.actions;
export default controllerSlice.reducer;
