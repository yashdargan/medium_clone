import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../action/Apiaction.ts';
import logger from 'redux-logger'
const store = configureStore({
reducer:{
    data:dataReducer,
  },
middleware:(getDefaultMiddleware) =>
   getDefaultMiddleware().concat(logger)
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
