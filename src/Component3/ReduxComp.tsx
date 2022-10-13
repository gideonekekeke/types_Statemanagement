import React, { FC, useContext, useState } from "react";
import { addingNewTask, todo } from "./ReduxState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

interface jobType {
	job: string;
	id: number;
}

const ReduxComp: FC = () => {
	const dispatch = useDispatch();
	const [stack, setStack] = useState<string>("");
	const data = useSelector((state: RootState) => state.myReducer.task);

	console.log("this is my data", data);

	const addingJob = () => {
		const data: jobType = {
			job: stack,
			id: Math.floor(Math.random() * 100),
		};
		setStack("");

		dispatch(addingNewTask(data));
	};

	// const addValues = () => {
	// 	const rand = Math.floor(Math.random() * 100);
	// 	value?.setData((el) => [
	// 		...el,
	// 		{
	// 			name: inp.name,
	// 			id: rand,
	// 			stack: inp.stack,
	// 		},
	// 	]);
	// };

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			<h2>Redux screen</h2>
			<input
				value={stack}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setStack(e.target.value);
				}}
				placeholder='enter your name'
				name='name'
			/>
			<br />
			<button onClick={addingJob}>Add Data</button>
			<br />
			<br />
			<br />

			<div>Read data</div>
		</div>
	);
};

export default ReduxComp;
