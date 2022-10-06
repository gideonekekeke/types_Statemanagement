import React, { FC } from "react";

interface Props {
	data: number;
	setData: React.Dispatch<React.SetStateAction<number>>;
}
const FifthComp: FC<Props> = ({ data, setData }) => {
	return (
		<div>
			<h3>FifthComp</h3>
			<div>{data}</div>
		</div>
	);
};

export default FifthComp;
