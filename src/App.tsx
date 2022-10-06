import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComp from "./Components/FirstComp";
import InputScreen from "./Component2/InputScreen";
import DisplayScreen from "./Component2/DisplayScreen";
import ReduxComp from "./Component3/ReduxComp";
import RecoilInput from "./RecoilComp4/RecoilInput";

function App() {
	return (
		<div>
			<InputScreen />
			<br />
			<br />
			<br />
			<DisplayScreen />
			<br />
			<br />
			<br />
			<br />
			<br />
			<ReduxComp />
			<br />
			<br />
			<br />
			<br />
			<RecoilInput />
		</div>
	);
}

export default App;
