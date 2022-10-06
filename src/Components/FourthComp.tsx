import React, { FC } from "react";
import FifthComp from "./FifthComp";

interface Props {
	data: number;
	setData: React.Dispatch<React.SetStateAction<number>>;
}
const FourthComp: FC<Props> = ({ data, setData }) => {
	return (
		<div>
			<h3>FourthComp</h3>
			<FifthComp data={data} setData={setData} />
		</div>
	);
};

export default FourthComp;
