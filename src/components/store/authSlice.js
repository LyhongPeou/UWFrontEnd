import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    console.log(userData);
    try {
      const response = await axiosInstance.post("/users/login", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState: { isAuthenticated: false, userData: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
