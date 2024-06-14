import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("/api/users");
  return response.data;
});

// Async thunk for adding a user
export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const response = await axios.post("/api/users", newUser);
  return response.data;
});

// Async thunk for updating a user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, updatedUser }) => {
    const response = await axios.put(`/api/users/${id}`, updatedUser);
    return response.data;
  }
);

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`/api/users/${id}`);
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      }
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    });
  },
});

export default usersSlice.reducer;
