import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    liked: [],
    currentPage: 1,
    perPage: 4,
    total: 0,
    totalPages: 0,
    isLoading: false,
    isError: false,
  },

  reducers: {
    loadMore(state) {
      state.currentPage++;
    },

    likeCar(state, { payload: { id } }) {
      const likedIdx = state.liked.findIndex(x => x.id === id);
      if (likedIdx !== -1) {
        state.liked.splice(likedIdx, 1); // unlike
        return;
      }
      const item = state.items.find(x => x.id === id);
      if (item) state.liked.push(item); // like
    },
  },

  extraReducers: builder => {
    builder

      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
        state.isLoading = false;
        state.isError = false;
        state.countPages = Math.ceil(payload.total / state.perPage);
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
