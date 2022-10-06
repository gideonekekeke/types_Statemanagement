import React, { FC, useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { count, showName } from "./RecoilState";
const RecoilInput: FC = () => {
	const [counting, setCounting] = useRecoilState(count);
	const [user, setUser] = useRecoilState(showName);

	console.log("this is show name", user);

	const addCount = () => {
		setCounting(counting + 1);
		setUser("gideon");
	};
	const removeCount = () => {
		setCounting(counting - 1);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			<h2>Recoil screen</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
				}}>
				<button onClick={addCount}>Add</button>
				<button>{counting}</button>
				<button onClick={removeCount}>Remove</button>
			</div>
		</div>
	);
};

export default RecoilInput;
