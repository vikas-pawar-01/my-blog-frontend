import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: false
    },
    reducers: {
        isLoogedIn: (state) => {
            state.value = true;
        },
        login: (state) => {
            console.log('in login ....');
            state.value = true;
        },
        logout: (state) => {
            console.log('in logout....');
            state.value = false;
        }
    },
});

export const { isLoogedIn, login, logout } = userSlice.actions;

export default userSlice.reducer;