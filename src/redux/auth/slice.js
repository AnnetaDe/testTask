import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logOutThunk, refreshThunk, signUpThunk } from './operations';
import { selectIsLoggedIn, selectToken, selectUserName } from './selectors';

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: null,
  isLoggedIn: false,
  error: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
