import React, { FC } from "react";
import SecondComp from "./SecondComp";

const FirstComp: FC = () => {
	const [data, setData] = React.useState<number>(0);

	return (
		<div>
			<h3>First component {data}</h3>
			<SecondComp data={data} setData={setData} />
		</div>
	);
};

export default FirstComp;
