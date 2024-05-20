import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "./selectors";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { changeNameFilter } = slice.actions;
export const { changeNumberFilter } = slice.actions;

const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        contact.number.includes(numberFilter.toLowerCase())
    );
  }
);

export default slice.reducer;
