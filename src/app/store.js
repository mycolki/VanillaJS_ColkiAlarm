import { configureStore } from '@reduxjs/toolkit';
import alarmDataReducer from '../features/alarmData/alarmDataSlice';

export default configureStore({
  reducer: {
    alarmData: alarmDataReducer,
  }
});
