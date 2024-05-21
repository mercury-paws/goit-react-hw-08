import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact } from "./operations";
import { deleteContact } from "./operations";
import { updateContact } from "./operations";
import { logOut } from "../auth/operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: {
      fetch: false,
      add: false,
      delete: false,
      update: false,
    },
    error: false,
  },
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
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading.add = false;
        state.loading.fetch = false;
        state.loading.delete = false;
      })
      .addCase(updateContact.pending, (state) => {
        state.loading.update = true;
        state.error = false;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        console.log("Payload:", action.payload);
        const updatedContact = action.payload;
        state.items = state.items.map((item) =>
          item.id === updatedContact.id ? updatedContact : item
        );
        state.loading.update = false;
      })
      .addCase(updateContact.rejected, (state) => {
        state.loading.update = false;
        state.error = true;
      }),
});

export default slice.reducer;
