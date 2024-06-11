import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsOper,
  addContactsOper,
  deleteContactsOper,
  changeContactsOper,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentContact: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  selectors: { selectContacts: state => state.items },
  reducers: {
    addCurrentContact(state, action) {
      state.currentContact = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsOper.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsOper.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteContactsOper.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(changeContactsOper.fulfilled, (state, { payload }) => {
        const item = state.todos.find(item => item.id === payload.id);
        item.todo = payload.todo;
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error;
        }
      );
  },
});

export const { addCurrentContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
