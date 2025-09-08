import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  equipment: [],
  form: '',
  location: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setEquipmentFilter: (state, { payload }) => {
      state.equipment = [...payload];
    },
    setFormFilter: (state, { payload }) => {
      state.form = payload;
    },

    setLocationFilter: (state, { payload }) => {
      state.location = payload;
    },
    resetFilters: state => {
      state.filters = initialState.filters;
    },
  },
});

export const { resetFilters, setEquipmentFilter, setFormFilter, setLocationFilter } =
  filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
