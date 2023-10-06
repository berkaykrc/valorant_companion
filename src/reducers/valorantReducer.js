import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  error: null,
};

const valorantSlice = createSlice({
  name: 'valorant',
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure } = valorantSlice.actions;
export default valorantSlice.reducer;