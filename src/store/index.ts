
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice';

// Create a persist configuration
const persistConfig = {
  key: 'root',
  storage, // This is the storage engine (localStorage in this case)
  whitelist: ['auth', 'todo'], // Add reducers you want to persist (auth and todo in this case)
};

// Combine your reducers into one
const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  // You can add other options like middleware here if needed
});

// Export persistor which will be used in your main entry file
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
