import React, { FC } from "react";
import ThirdComp from "./ThirdComp";

interface Props {
	data: number;
	setData: React.Dispatch<React.SetStateAction<number>>;
}

const SecondComp: FC<Props> = ({ data, setData }) => {
	const add = () => {
		setData(data + 1);
	};

	return (
		<div>
			<h3>SecondComp</h3>
			<ThirdComp data={data} setData={setData} />
			<button onClick={add}>Add Count</button>
		</div>
	);
};

export default SecondComp;
