import { createSlice } from '@reduxjs/toolkit';
import { getDaily } from '../cars/operations';

const dailySlice = createSlice({
  name: 'daily',
  initialState: {
    dailylist: [],
    lastUpdate: null,
    isLoading: false,
    isError: false,
  },

  reducers: {},

  extraReducers: builder => {
    builder

      .addCase(getDaily.fulfilled, (state, { payload }) => {
        state.lastUpdate = new Date().getTime();
        state.dailylist = payload;
        state.isLoading = false;
        state.isError = false;
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
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        state => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const dailySliceReducer = dailySlice.reducer;
