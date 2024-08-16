import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice =createSlice({
    name:"chat",
    initialState:{
     chatMessage:[]
    },
    reducers:{
        addChatMessage:(state,action)=>{
         state.chatMessage.splice(LIVE_CHAT_COUNT,1)
         state.chatMessage.unshift(action.payload)
        }
    }
})

export default chatSlice.reducer;
export const{addChatMessage}=chatSlice.actions;