import { createSlice } from "@reduxjs/toolkit";

export interface todo {
	task: {
		job: string;
		id: number;
	}[];
}

// interface taskData {
// 	task: todo[];
// }

const initialState: todo = {
	task: [],
};

const ReduxState = createSlice({
	name: "second",
	initialState,
	reducers: {
		addTask: (state, { payload }) => {
			state.task = payload;
		},

		removeTask: (state, { payload }) => {
			state.task.filter((el) => el.id !== payload.id);
		},
		addingNewTask: (state, { payload }) => {
			state.task = [...state.task, payload];
		},
	},
});

export const { addTask, removeTask, addingNewTask } = ReduxState.actions;

export default ReduxState.reducer;
