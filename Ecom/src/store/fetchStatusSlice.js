import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name:"fetchStatus",
  initialState:{
    fetchDone:false,  // false:"PENDING" and true:"DONE"
    currentlyFetching:false
  },
  reducers:{
    markFetchDone:(state)=>{
     state.fetchDone=true;
    },
    markFetchStarting:(state)=>{
     state.currentlyFetching=true;
    },
    markFetchingCompleted:(state)=>{
     state.currentlyFetching=false;
    }
  }
});

export const {markFetchDone,markFetchStarting,markFetchingCompleted} =fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;