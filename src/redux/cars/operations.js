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

export const getDaily = createAsyncThunk('advert/daily', async (_, thunkApi) => {
  const lastUpdate = localStorage.getItem('lastUpdate');
  const timeNow = new Date().getTime();
  const timeDiff = timeNow - lastUpdate;
  const minutes = timeDiff / (1000 * 60 * 60 * 60);
  if (minutes > 1) {
    try {
      const response = await mockApi.get(`advert`);
      const mix = response.data.sort(() => 0.5 - Math.random()).slice(0, 4);

      return mix;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  } else {
    return JSON.parse(localStorage.getItem('daily'));
  }
});
