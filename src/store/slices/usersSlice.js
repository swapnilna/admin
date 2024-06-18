import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../../helpers/request.service";

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  let param = { limit: 3, skip: 10, select: "id,firstName,age" };
  let response = [];
  await Request.get("/users", param)
    .then((res) => {
      response = res?.data?.users;
    })
    .catch((error) => {
      console.log("Error in /users:", error);
    });
  return response;
});

// Async thunk for adding a user
export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  try {
    await Request.post("/users/add", JSON.stringify(newUser)).catch((error) => {
      console.log("Error in addUser:", error);
    });
    return newUser; //response.data;
  } catch (error) {
    console.log("Error in addUser:", error?.response?.data);
  }
});

// Async thunk for updating a user
export const updateUser = createAsyncThunk("users/updateUser", async (data) => {
  await Request.put(`/users/${data.id}`, JSON.stringify(data.body)).catch(
    (error) => {
      console.log("Error in updateUser:", error);
      data.body = [];
    }
  );
  return data.body; //response.data;
});

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await Request.delete(`/users/${id}`).catch((error) => {
    console.log("Error in deleteUser:", error);
    id = 0;
  });
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
      const index = state.findIndex((user) => user.id === action?.payload?.id);
      if (index > -1) {
        state[index] = action?.payload;
      }
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return state.filter((user) => user?.id !== action?.payload);
    });
  },
});

export default usersSlice.reducer;
