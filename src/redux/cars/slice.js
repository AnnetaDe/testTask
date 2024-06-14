import { createSlice } from '@reduxjs/toolkit';
import { getCarOper } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
    liked: [],
    currentPage: 1,
    perPage: 12,
    moreToLoad: true,
    count: 0,
  },

  selectors: {
    selectCars: state => state.items,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.error,
    selectLiked: state => state.liked,
    selectCurrentPage: state => state.currentPage,
    selectPerPage: state => state.perPage,
    selectMoreToLoad: state => state.moreToLoad,
    selectCount: state => state.count,
  },
  reducers: {
    loadMore(state) {
      state.currentPage++;
    },
    likeCar(state, { payload }) {
      const item = state.items.find(item => item.id === payload.id);
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

      .addCase(getCarOper.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.count = payload.length;
        if (state.count < state.items.length) {
          state.moreToLoad = false;
        }
        state.items = [...state.items, ...payload];
        state.displayedItems = payload.slice(0, state.perPage);
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
export const {
  selectCount,
  selectCars,
  selectIsLoading,
  selectIsError,
  selectLiked,
  selectCurrentPage,
  selectPerPage,
  selectMoreToLoad,
} = carsSlice.selectors;
export const { loadMore, likeCar } = carsSlice.actions;
