import React, { createContext, PropsWithChildren, useEffect } from "react";

interface Users {
	name?: string;
	id?: number;
	stack?: string;
}
type UsersProfile = {
	data: Users[];
	setData: React.Dispatch<React.SetStateAction<Users[]>>;
};

export const GlobalContext = React.createContext<UsersProfile | null>(null);

export const GlobalUser: React.FC<PropsWithChildren<Users>> = ({
	children,
}) => {
	const [data, setData] = React.useState<Users[]>([
		{
			name: "gideon",
			id: 5,
			stack: "frontend",
		},
	]);

	useEffect(() => {
		window.localStorage.setItem("multi", JSON.stringify(data));
	}, [data, "multi"]);

	return (
		<GlobalContext.Provider
			value={{
				data,
				setData,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
