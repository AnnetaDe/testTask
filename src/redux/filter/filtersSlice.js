import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    make: '',
    price: Infinity,
    from: 0,
    to: Infinity,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setBrandFilter: (state, { payload }) => {
      state.make = payload;
    },
    setPriceFilter: (state, { payload }) => {
      state.price = payload;
    },

    setFromFilter: (state, { payload }) => {
      state.from = payload;
    },
    setToFilter: (state, { payload }) => {
      state.to = payload;
    },
    resetFilters() {
      return initialState;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { resetFilters, setBrandFilter, setPriceFilter, setFromFilter, setToFilter } =
  filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
