import { createSlice } from '@reduxjs/toolkit';

const name = "alarmDate";
const initialState = {
  alarmsById: {},
  allIds: [],
};

const alarmDataSlice = createSlice({
  name,
  initialState,
reducers: {
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
  },
});

export const { saveAlarm, removeAlarm } = alarmDataSlice.actions;
export default alarmDataSlice.reducer;
