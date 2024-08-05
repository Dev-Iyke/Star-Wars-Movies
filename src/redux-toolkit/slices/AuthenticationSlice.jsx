import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false,
    userEmail: null
}
const authSlices = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, {payload}) {
            state.isLoggedIn = true;
            state.userEmail = payload;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
})
export default authSlices.reducer
export const { login, logout } = authSlices.actions;