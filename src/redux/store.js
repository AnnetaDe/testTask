import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
import { carsReducer } from './cars/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { modalSliceReducer } from './cars/modalSlice';
import { filtersSliceReducer } from './filter/filtersSlice';
import { dailySliceReducer } from './daily/dailySlice';

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
// export const persistedDailyList = {
//   key: ['dailylist'],
//   version: 1,
//   storage,
//   whitelist: ['dailylist'],
// };

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistedLikedCars, carsReducer),
    filters: filtersSliceReducer,
    modal: modalSliceReducer,
    daily: persistReducer(persistedDailyUpdates, dailySliceReducer),
    dailyList: persistReducer(persistedDailyUpdates, dailySliceReducer),
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
