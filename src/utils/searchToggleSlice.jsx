import { createSlice } from "@reduxjs/toolkit";

const searchToggleSlice = createSlice({
    name:"search",
    initialState:{
        searchToggle:false,
    },
    reducers:{
        searchToggle:(state,action)=>{
            state.searchToggle = !state.searchToggle
        },
        closeSearchToggle:(state,action)=>{
            state.searchToggle = false
        }
    }
})

export default searchToggleSlice.reducer;
export const {searchToggle,closeSearchToggle}= searchToggleSlice.actions;