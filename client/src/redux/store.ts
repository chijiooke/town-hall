import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .prepend(
     
    )
     .concat(logger),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;
