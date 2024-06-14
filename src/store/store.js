// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
let persistedState = {};

try {
  persistedState = JSON.parse(localStorage.getItem("state")) || {};
} catch (error) {
  console.error("Error reading localStorage", error);
}

const store = configureStore({
  reducer: {
    auth: authReducer,
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
