import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
