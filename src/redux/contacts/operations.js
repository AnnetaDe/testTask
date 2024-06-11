import { createAsyncThunk } from '@reduxjs/toolkit';
import { herokuApi } from '../../config/herokuApi';

export const getContactsOper = createAsyncThunk('contacts/get', async (_, thunkApi) => {
  try {
    const response = await herokuApi.get('contacts');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

getContactsOper();

export const addContactsOper = createAsyncThunk('contacts/add', async (contact, thunkApi) => {
  try {
    const response = await herokuApi.post('contacts', contact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const deleteContactsOper = createAsyncThunk('contacts/delete', async (id, thunkApi) => {
  try {
    const { data } = await herokuApi.delete(`contacts/${id}`);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const changeContactsOper = createAsyncThunk('contacts/change', async (body, thunkApi) => {
  try {
    const { data } = await herokuApi.patch(`contacts/${body.id},body`);
    console.log('its change');

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
