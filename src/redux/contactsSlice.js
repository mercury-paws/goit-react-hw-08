import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contactList.json";
import { fetchContacts } from "./contactsOps";
import { addContact } from "./contactsOps";
import { deleteContact } from "./contactsOps";

const slice = createSlice({
  name: "contact",
  initialState: {
    items: [],
    loading: {
      fetch: false,
      add: false,
      delete: false,
    },
    error: false,
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter((cont) => cont.id !== action.payload);
  //   },
  // },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading.fetch = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading.fetch = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading.fetch = false;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading.add = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading.add = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading.add = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading.delete = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading.delete = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading.delete = false;
        state.error = true;
      }),
});

export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoadingFetch = (state) => state.contacts.loading.fetch;
export const selectLoadingAdd = (state) => state.contacts.loading.add;
export const selectLoadingDelete = (state) => state.contacts.loading.delete;

export default slice.reducer;
