import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer, { logout } from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
let persistedState = {};

try {
  persistedState = JSON.parse(localStorage.getItem("state")) || {};
} catch (error) {
  console.error("Error reading localStorage", error);
}

const combinedReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  // Add other reducers as needed
});

let store = configureStore({
  reducer: (state, action) => {
    // Logout action
    if (logout.match(action)) {
      let newState = { ...state };
      // Reset the state or part of the state
      newState.auth = {
        user: [],
        authToken: "",
        isAuthenticated: false,
        status: "idle",
        error: null,
      };
      return newState;
    }
    return combinedReducer(state, action);
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage", error);
  }
});

export default store;
