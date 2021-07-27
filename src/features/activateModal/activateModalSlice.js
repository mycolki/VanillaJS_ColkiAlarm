import { createSlice } from '@reduxjs/toolkit';

const name = 'activateModal';
const initialState = {
  shouldOpenModal: false,
};

const activateModalSlice = createSlice({
  name,
  initialState,
  reducers: {
    openModal(state) {
      state.shouldOpenModal = !state.shouldOpenModal;
    },
  },
});

export const { openModal, closeModal } = activateModalSlice.actions;
export default activateModalSlice.reducer;
