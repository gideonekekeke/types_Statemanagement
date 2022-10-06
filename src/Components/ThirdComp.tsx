import React, { FC } from "react";
import FourthComp from "./FourthComp";

interface Props {
	data: number;
	setData: React.Dispatch<React.SetStateAction<number>>;
}

const ThirdComp: FC<Props> = ({ data, setData }) => {
	return (
		<div>
			<h3>ThirdComp</h3>
			<FourthComp data={data} setData={setData} />
		</div>
	);
};

export default ThirdComp;
