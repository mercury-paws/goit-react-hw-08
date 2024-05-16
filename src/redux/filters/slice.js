import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./selectors";

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
// export const selectNumberFilter = (state) => state.filters.number;
const selectContacts = (state) => state.contacts.items;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default slice.reducer;
