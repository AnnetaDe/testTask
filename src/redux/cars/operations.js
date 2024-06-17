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
          // sortBy: 'make',
        },
      });
      console.log('response', response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getAll = createAsyncThunk('advert/get', async (_, thunkApi) => {
  try {
    const response = await mockApi.get(`advert`);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
