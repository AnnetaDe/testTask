import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockApi } from '../../config/mockApi.js';

export const getCarOper = createAsyncThunk(
  'advert/get',
  async ({ currentPage, perPage }, thunkApi) => {
    try {
      const response = await mockApi.get(`advert`, {
        params: {
          page: currentPage,
          limit: perPage,
        },
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
