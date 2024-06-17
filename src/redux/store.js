import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
import { carsReducer } from './cars/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { modalSliceReducer } from './cars/modalSlice';
import { filtersSliceReducer } from './filter/filtersSlice';
import { dailySliceReducer } from './daily/dailySlice';

export const persistConfigLiked = {
  key: ['liked'],
  version: 1,
  storage,
  whitelist: ['liked'],
};
export const persistConfigDaily = {
  key: ['daily'],
  version: 1,
  storage,
  whitelist: ['daily'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfigLiked, carsReducer),
    filters: filtersSliceReducer,
    modal: modalSliceReducer,
    daily: persistReducer(persistConfigDaily, dailySliceReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== 'production',
});
export const persistor = persistStore(store);
