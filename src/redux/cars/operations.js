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
  const updatedAt = thunkApi.getState().daily.lastUpdate;
  const timeNow = new Date().getTime();

  const timeDiff = timeNow - updatedAt;
  const minutes = timeDiff / 1000 / 60;
  console.log('timeNow', timeNow);
  console.log('lastUpdate', updatedAt);
  console.log('timeDiff', timeDiff);
  console.log('minutes', minutes);
  if (minutes > 1) {
    try {
      const response = await mockApi.get(`advert`);
      const mix = response.data.sort(() => 0.5 - Math.random()).slice(0, 4);
      // localStorage.setItem('dailyList', JSON.stringify(mix));
      // localStorage.setItem('lastUpdate', new Date().getTime());

      return mix;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
});
