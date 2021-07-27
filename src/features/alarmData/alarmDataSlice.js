import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

import { CLOCK_FORMAT } from '../../constants/timeText';
import { ERROR } from '../../constants/errorText';

const name = 'alarmData';
const initialState = {
  clock: moment().format(CLOCK_FORMAT),
  alarmsById: {},
  allIds: [],
  id: '',
  isTimeToAlarm: false,
  hasError: false,
  error: '',
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

      if (state.alarmsById[id]) throw Error(ERROR.SAME_KEY.CONSOLE_MSG);

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
    setError(state, action) {
      state.hasError = !state.hasError;
      state.error = action.payload;
    }
  },
});

export const {
  setClock,
  saveAlarm,
  removeAlarm,
  saveCurrentId,
  initializeRingedId,
  setError,
} = alarmDataSlice.actions;

export default alarmDataSlice.reducer;
