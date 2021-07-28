import { createSlice } from '@reduxjs/toolkit';

const name = 'activateModal';
const initialState = {
  shouldOpenModal: false,
};

const activateModalSlice = createSlice({
  name,
  initialState,
  reducers: {
    toggleModal(state) {
      state.shouldOpenModal = !state.shouldOpenModal;
    },
  },
});

export const { toggleModal } = activateModalSlice.actions;
export default activateModalSlice.reducer;
