import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoInfo:[],
        channelInfo:[],
    },
    reducers:{
        addVideoInfo:(state,action)=>{
         state.videoInfo = action.payload
        },
        addChannelInfo:(state,action)=>{
            state.channelInfo = action.payload
           }
    }
})

export default videoSlice.reducer;
export const{addVideoInfo,addChannelInfo}=videoSlice.actions;