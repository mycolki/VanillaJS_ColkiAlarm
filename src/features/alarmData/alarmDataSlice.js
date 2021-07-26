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
    saveData(state, action) {
      const { date, time } = action.payload;
      const id = date + ' ' + time;
      state.allIds.push(id);
      state.alarmsById[id] = action.payload;
    },
  },
});

export const { saveData } = alarmDataSlice.actions;
export default alarmDataSlice.reducer;
