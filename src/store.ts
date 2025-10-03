import { configureStore } from "@reduxjs/toolkit";
import setCurrentValue from "./slices/valueSlice";

export const store = configureStore({
    reducer: {
        calcValue: setCurrentValue,
    },
});