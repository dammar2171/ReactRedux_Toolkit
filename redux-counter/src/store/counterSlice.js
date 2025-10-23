import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter",
  initialState:{value:0},
  reducers:{
    increment:(state)=>{
      state.value += 1;
    },
    decrement:(state)=>{
      state.value -= 1;
    },
    incrementByFive:(state)=>{
      state.value += 5;
    },
    decrementByFive:(state)=>{
      state.value -= 5;
    },
    addAmount:(state,action)=>{
      state.value += action.payload;
    },
    subAmount:(state,action)=>{
      state.value -= action.payload;
    }
  }
});

export const {increment,decrement,incrementByFive,decrementByFive,addAmount,subAmount}=counterSlice.actions;
export default counterSlice.reducer;