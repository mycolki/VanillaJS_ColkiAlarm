import moment from 'moment';
import { createSlice } from '@reduxjs/toolkit';
import { CLOCK_FORMAT } from '../../constants/timeText';

const name = 'alarmDate';
const initialState = {
  clock: moment().format(CLOCK_FORMAT),
  alarmsById: {},
  allIds: [],
  id: '',
  isTimeToAlarm: false,
};

const alarmDataSlice = createSlice({
  name,
  initialState,
  reducers: {
    setClock(state) {
      state.clock = moment().format(CLOCK_FORMAT);
    },
    saveAlarm(state, action) {
      const { date, time } = action.payload;
      const id = date + ' ' + time;
      state.allIds.push(id);
      state.alarmsById[id] = action.payload;
    },
    removeAlarm(state, action) {
      const id = action.payload;
      delete state.alarmsById.id;
      state.allIds = state.allIds.filter(savedId => savedId !== id);
    },
    saveCurrentId(state, action) {
      state.id = action.payload;
      state.isTimeToAlarm = true;
    },
    initializeRingedId(state) {
      state.id = '';
      state.isTimeToAlarm = false;
    },
  },
});

export const { setClock, saveAlarm, removeAlarm, saveCurrentId, initializeRingedId } = alarmDataSlice.actions;
export default alarmDataSlice.reducer;
