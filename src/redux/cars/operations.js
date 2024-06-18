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
export const getAll = createAsyncThunk('advert/get', async (_, thunkApi) => {
  try {
    const response = await mockApi.get(`advert`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getDaily = createAsyncThunk('advert/daily', async (_, thunkApi) => {
  const savedUpdate = thunkApi.getState().daily.lastUpdate;
  const timeNow = new Date().getTime();

  const timeDiff = timeNow - savedUpdate;
  const minutes = timeDiff / 1000 / 60;

  if (minutes > 1) {
    try {
      const response = await mockApi.get(`advert`);
      const mix = response.data.sort(() => 0.5 - Math.random()).slice(0, 4);
      const lastUpdate = new Date().getTime();
      localStorage.setItem('dailyList', JSON.stringify(mix));
      localStorage.setItem('lastUpdate', lastUpdate);
      return { mix, lastUpdate: lastUpdate };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  } else {
    return { mix: JSON.parse(localStorage.getItem('dailyList')), lastUpdate: savedUpdate };
  }
});
