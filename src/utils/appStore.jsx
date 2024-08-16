import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import searchSlice from "./searchSlice"
import videoSlice from "./videoSlice"
import chatSlice from "./chatSlice"
import searchToggleSlice from "./searchToggleSlice"
const appStore =configureStore({
    reducer:{
     config:configSlice,
     search:searchSlice,
     video:videoSlice,
     chat:chatSlice,
     search:searchToggleSlice,
    }
});

export default appStore;