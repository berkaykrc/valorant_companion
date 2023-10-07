import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: null,
  agent : null,
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      //action is an object with a payload property
      state.agents = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      //action is an object with a payload property
      state.agents = null;
      state.error = action.payload;
    },
    agentById: (state, action) => {
      //action is an object with a payload property
      state.agent = action.payload;
      state.error = null;
    },
  },
});



export const { agentById, fetchDataSuccess, fetchDataFailure } = agentsSlice.actions;

export default agentsSlice.reducer;
