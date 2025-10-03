import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
    name: "caluclatorValue",
    initialState: { 
        currentValue: "0",
    },
    reducers: {
        setCurrentValue(state, action) {
            state.currentValue = action.payload;
        }
    }
});

export const { setCurrentValue } = valueSlice.actions;
export default valueSlice.reducer;