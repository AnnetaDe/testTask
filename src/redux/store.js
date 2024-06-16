import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
import { carsReducer } from './cars/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { modalSliceReducer } from './cars/modalSlice';
import { filtersSliceReducer } from './filter/filtersSlice';

export const persistConfig = {
  key: 'cars',
  version: 1,
  storage,
  whitelist: ['liked'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsReducer),
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
