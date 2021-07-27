import { configureStore } from '@reduxjs/toolkit';
import alarmDataReducer from '../features/alarmData/alarmDataSlice';
import modalReducer from '../features/modal/modalSlice';


export default configureStore({
  reducer: {
    alarmData: alarmDataReducer,
    modal: modalReducer,
  },
});
