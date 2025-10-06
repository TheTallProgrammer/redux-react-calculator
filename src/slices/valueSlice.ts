import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
    name: "caluclatorValue",
    initialState: { 
        currentValue: "0",
    },
    reducers: {
        // if the queue.length == 1, that means that the operations the user was performing have been complete, so if they start typing a new number, we should reset the current value to that number they're typing
        // make sure the queue logic for adding a number/operator is adding it to the back, not the front
        setCurrentValue(state, action) {
            // if/else is temporary until we implement full calculator functionality with operator logic
            if(state.currentValue === "0") {
                state.currentValue = action.payload;
            } else {
                state.currentValue += action.payload;
            }
        },
        resetValue(state) {
            state.currentValue = "0";
        }
    }
});

export const { setCurrentValue, resetValue } = valueSlice.actions;
export default valueSlice.reducer;