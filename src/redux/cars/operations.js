import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockApi } from '../../config/mockApi.js';

export const getAll = createAsyncThunk(
  'campers/get',
  async ({ page = 1, limit = 4 } = {}, thunkApi) => {
    try {
      const { data } = await mockApi.get('campers', {
        params: { page, limit },
      });

      console.log('response', data);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const getOne = createAsyncThunk('campers/getOne', async (id, thunkApi) => {
  try {
    const { data } = await mockApi.get(`campers/${id}`);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
