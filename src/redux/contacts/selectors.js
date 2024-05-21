export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoadingFetch = (state) => state.contacts.loading.fetch;
export const selectLoadingAdd = (state) => state.contacts.loading.add;
export const selectLoadingDelete = (state) => state.contacts.loading.delete;
export const selectLoadingUpdate = (state) => state.contacts.loading.update;
