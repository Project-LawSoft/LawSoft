import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from '../features/auth/authSlice';
import mtsReducer from '../features/MTS/mtsSlice';
import searchLawyerReducer from '../features/SearchLawyer/SearchLawyerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    mts: mtsReducer,
    searchLawyer: searchLawyerReducer
  },
});
