import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userSlice,
    },
});