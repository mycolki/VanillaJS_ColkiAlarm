import { configureStore } from '@reduxjs/toolkit';
import alarmDataReducer from '../features/alarmData/alarmDataSlice';
import activateModalReducer from '../features/activateModal/activateModalSlice';

export default configureStore({
  reducer: {
    alarmData: alarmDataReducer,
    activateModal: activateModalReducer,
  },
});
