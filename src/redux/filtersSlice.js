import { createSlice, createSelector } from "@reduxjs/toolkit";

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
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// export const selectFilteredNumberedContacts = createSelector(
//   [selectContacts, selectNumberFilter],
//   (contacts, filter) => {
//     if (!filter) return contacts;
//     const cleanedFilter = filter.replace(/\D/g, "");
//     return contacts.filter((contact) => contact.number.includes(cleanedFilter));
//   }
// );

//
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter, selectNumberFilter],
//   (contacts, nameFilter, numberFilter) => {
//     return contacts.filter((contact) => {
//       const nameMatch = contact.name.toLowerCase().includes(nameFilter.toLowerCase());
//       const numberMatch = contact.number.includes(numberFilter.replace(/\D/g, ""));
//       return nameMatch && numberMatch;
//     });
//   }
// );
//
export default slice.reducer;
