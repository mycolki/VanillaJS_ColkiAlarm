import { createSlice } from '@reduxjs/toolkit';

const name = "modal";
const initialState = {
  canShow: false,
  id: '',
};

const modalSlice = createSlice({
  name,
  initialState,
  reducers: {
    // showModal(state, action) {
    //   document.querySelector('body').style.overflow = 'hidden';
    //   state.show = true;
    //   state.element = action.payload;
    // },
    // hideModal(state, action) {
    //   document.querySelector('body').removeAttribute('style');
    //   state.show = false;
    //   state.element = action.payload;
    // },
    saveId(state, action) {
      state.canShow = true;
      state.id = action.payload;
    },
    removeId(state) {
      state.canShow = false;
      state.id = '';
    },
  },
});

export const {  saveId, removeId } = modalSlice.actions;
export default modalSlice.reducer;
