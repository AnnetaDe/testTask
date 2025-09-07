import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    equipment: '',
    type: '',
    location: '',
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setEquipmentFilter: (state, { payload }) => {
      state.filters.equipment = payload;
    },
    setTypeFilter: (state, { payload }) => {
      state.filters.type = payload;
    },

    setLocationFilter: (state, { payload }) => {
      state.filters.location = payload;
    },
    resetFilters: state => {
      state.filters = initialState.filters;
    },
  },
});

export const { resetFilters, setEquipmentFilter, setTypeFilter, setLocationFilter } =
  filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
