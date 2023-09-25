import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../Features/authSlice";
export const Store = configureStore({
    reducer: {
        auth: authSlice,
    }
})