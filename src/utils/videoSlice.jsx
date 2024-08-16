import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoInfo:[],
    },
    reducers:{
        addVideoInfo:(state,action)=>{
         state.videoInfo = action.payload
        }
    }
})

export default videoSlice.reducer;
export const{addVideoInfo}=videoSlice.actions;