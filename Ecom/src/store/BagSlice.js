import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addToBag:(state,action)=>{
     const existingItem = state.find((item) => item.id === action.payload.id);
    if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload });
    }

    },
    deleteFromBag:(state,action)=>{
     return state.filter(item => item.id !== action.payload);
    },
  }
})
export const {addToBag,deleteFromBag}=bagSlice.actions;
export default bagSlice.reducer;