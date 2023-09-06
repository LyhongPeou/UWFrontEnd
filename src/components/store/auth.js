import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = { user: null, token: null };



const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },

        logOut: (state, action) => {
            state.user = null
            state.accessToken = null
        }
    }
})

export const authAction = authSlice.actions;

export default authSlice;

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.accessToken