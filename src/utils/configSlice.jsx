import { createSlice } from "@reduxjs/toolkit"

const configSlice = createSlice({
    name:"config",
    initialState:{
        navToggle:null,
        navSmToggle:null,
    },
    reducers:{
        addNavToggle:(state,action)=>{
            state.navToggle = !state.navToggle
        },
        closeToggle:(state,action)=>{
            state.navToggle = false
        },
        addNavSmToggle:(state,action)=>{
            state.navSmToggle = !state.navSmToggle
        },
        closeSmToggle:(state,action)=>{
            state.navSmToggle = false
        },
        
    }
})

export default configSlice.reducer
export const {addNavToggle,closeToggle,addNavSmToggle,closeSmToggle}= configSlice.actions