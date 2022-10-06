import { atom } from "recoil";

export const count = atom({
	key: "count",
	default: 0,
});

export const showName = atom({
	key: "showName",
	default: "jesu",
});
