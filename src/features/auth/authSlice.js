import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosPrivateInstance } from "../../api/axiosInstance";
export const login = createAsyncThunk(
  "login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axiosPrivateInstance.post("auth/login", user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logOut = createAsyncThunk(
  "logOut",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivateInstance.post("auth/logOut");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: null, role: null, status: null, error: null },
  reducers: {
    setCredential: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("🚀 ~ file: authSlice.js:41 ~ .addCase ~ action", action);
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.role = action.payload.role;
        localStorage.setItem("login", true);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.accessToken = null;
        state.role = null;
        localStorage.removeItem("cartItems");
        localStorage.setItem("login", false);
      });
  },
});

export default authSlice.reducer;
export const { setCredential } = authSlice.actions;
export const selectCurrentToken = (state) => state.auth.accessToken;
export const selectRole = (state) => state.auth.role;
export const selectError = (state) => state.auth.error;
export const selectStatus = (state) => state.auth.status;
