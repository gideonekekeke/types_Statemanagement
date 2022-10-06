import React, { FC, useContext } from "react";
import { GlobalContext } from "./GbobalContext";

interface inputVal {
	name: string;
	id?: number;
	stack: string;
}

const InputScreen: FC = () => {
	const value = useContext(GlobalContext);

	console.log(value?.data);

	const [inp, setInp] = React.useState<inputVal>({
		name: "",
		stack: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInp({
			...inp,
			[e.target.name]: e.target.value,
		});
	};

	const addValues = () => {
		const rand = Math.floor(Math.random() * 100);
		value?.setData((el) => [
			...el,
			{
				name: inp.name,
				id: rand,
				stack: inp.stack,
			},
		]);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			<h2>InputScreen</h2>
			<input
				placeholder='enter your name'
				onChange={handleChange}
				value={inp.name}
				name='name'
			/>
			<br />

			<input
				placeholder='enter your stack'
				onChange={handleChange}
				value={inp.stack}
				name='stack'
			/>
			<button onClick={addValues}>Add Data</button>
		</div>
	);
};

export default InputScreen;
