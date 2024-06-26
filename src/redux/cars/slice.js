import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    liked: [],
    currentPage: 1,
    perPage: 12,
    moreToLoad: true,
    countPages: 0,
    allItems: [],
    allBrands: [],
    isLoading: false,
    isError: false,
  },

  reducers: {
    loadMore(state) {
      state.currentPage++;
      state.items = state.allItems.slice(0, state.currentPage * state.perPage);
      if (state.countPages < state.currentPage) {
        state.moreToLoad = false;
      }
    },
    likeCar(state, { payload }) {
      const item = state.allItems.find(item => item.id === payload.id);
      if (item) {
        const index = state.liked.findIndex(item => item.id === payload.id);
        if (index === -1) {
          state.liked = [...state.liked, item];
        } else {
          state.liked = state.liked.filter(item => item.id !== payload.id);
        }
      }
    },
  },

  extraReducers: builder => {
    builder

      .addCase(getAll.fulfilled, (state, { payload }) => {
        // state.items = payload.slice(0, state.perPage);
        state.allItems = payload;
        state.isLoading = false;
        state.isError = false;
        state.allBrands = payload.map(item => item.make);
        state.countPages = payload.length / 12;
      })

      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.isError = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { error }) => {
          state.isLoading = false;
          state.isError = error;
        }
      );
  },
});

export const carsReducer = carsSlice.reducer;
export const { loadMore, likeCar } = carsSlice.actions;
