import { configureStore } from '@reduxjs/toolkit';
import nodePadReducer from './createSlice/createSlice';
export default configureStore({
  reducer: {
    nodePad: nodePadReducer,
  },
});
