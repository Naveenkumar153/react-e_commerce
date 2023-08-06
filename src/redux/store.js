import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer); // Persist the authReducer


export const store = configureStore({
  reducer: { cart: persistedReducer , auth:persistedAuthReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk:true,
    }),
})

export let persistor = persistStore(store)