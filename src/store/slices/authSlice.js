import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../../helpers/request.service";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await Request.post("/user/login", credentials).catch(
        (error) => {
          console.log("Error in /user/login:", error);
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    authToken: "",
    isAuthenticated: false,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
       // Perform any cleanup logic here
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
      state.isAuthenticated = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.authToken = action?.payload?.token;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
