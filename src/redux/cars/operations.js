import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockApi } from '../../config/mockApi.js';

export const getAll = createAsyncThunk(
  'campers/get',
  async ({ page = 1, limit = 4 } = {}, thunkApi) => {
    try {
      const res = await mockApi.get('campers', {
        params: { page, limit },
      });

      console.log('response', res.data);

      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
