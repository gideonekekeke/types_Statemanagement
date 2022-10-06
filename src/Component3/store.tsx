import myReducer from "./ReduxState";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		myReducer,
	},
});
