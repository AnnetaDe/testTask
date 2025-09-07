import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { modalSliceReducer } from './cars/modalSlice';
import { carsReducer } from './cars/slice';
import { filtersSliceReducer } from './filter/filtersSlice';

export const persistedLikedCars = {
  key: ['likedCars'],
  version: 1,
  storage,
  whitelist: ['liked'],
};
export const persistedDailyUpdates = {
  key: ['lastUpdate'],
  version: 1,
  storage,
  whitelist: ['lastUpdate', 'dailylist'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistedLikedCars, carsReducer),
    filters: filtersSliceReducer,
    modal: modalSliceReducer,
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
