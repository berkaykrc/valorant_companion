import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guns: null,
};

const gunsSlice = createSlice({
  name: "guns",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      //action is an object with a payload property
      state.guns = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      //action is an object with a payload property
      state.guns = null;
      state.error = action.payload;
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure } = gunsSlice.actions;
export default gunsSlice.reducer;
