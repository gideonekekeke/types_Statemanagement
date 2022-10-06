import React, { useContext } from "react";
import { GlobalContext } from "./GbobalContext";

const DisplayScreen = () => {
	const value = useContext(GlobalContext);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			{value?.data?.map((props) => (
				<div key={props?.id}>
					<div>{props.name}</div>
				</div>
			))}
		</div>
	);
};

export default DisplayScreen;
