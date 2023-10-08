import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buddies: null,
    };

const buddiesSlice = createSlice({
    name: "buddies",
    initialState,
    reducers: {
        fetchBuddiesDataSuccess: (state, action) => {
            //action is an object with a payload property
            state.buddies = action.payload;
            state.error = null;
        },
        fetchBuddiesDataFailure: (state, action) => {
            //action is an object with a payload property
            state.buddies = null;
            state.error = action.payload;
        },
    },
});

export const { fetchBuddiesDataSuccess, fetchBuddiesDataFailure } = buddiesSlice.actions;
export default buddiesSlice.reducer;