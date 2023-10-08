import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maps: null,
    };

const mapsSlice = createSlice({
    name: "maps",
    initialState,
    reducers: {
        fetchMapDataSuccess: (state, action) => {
            //action is an object with a payload property
            state.maps = action.payload;
            state.error = null;
        },
        fetchMapDataFailure: (state, action) => {
            //action is an object with a payload property
            state.maps = null;
            state.error = action.payload;
        },
    },
});

export const { fetchMapDataSuccess, fetchMapDataFailure } = mapsSlice.actions;
export default mapsSlice.reducer;