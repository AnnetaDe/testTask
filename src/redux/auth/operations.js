import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, herokuApi, setToken } from '../../config/herokuApi';

export const signUpThunk = createAsyncThunk('users/signup', async (credentials, thunkApi) => {
  try {
    const { data } = await herokuApi.post('users/signup', credentials);
    alert('You have successfully registered!');
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const loginThunk = createAsyncThunk('users/login', async (credentials, thunkApi) => {
  try {
    const { data } = await herokuApi.post('users/login', credentials);
    setToken(data.token);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const logOutThunk = createAsyncThunk('users/logOut', async (_, thunkApi) => {
  try {
    await herokuApi.post('users/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  console.log(token);
  if (!token) {
    return thunkApi.rejectWithValue('token isnt found!');
  }
  setToken(token);
  try {
    const { data } = await herokuApi.get('users/current');
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
