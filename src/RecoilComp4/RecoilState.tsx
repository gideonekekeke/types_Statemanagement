import { atom, selector } from "recoil";

export const count = atom({
	key: "count",
	default: 0,
});

export const showName = atom({
	key: "showName",
	default: "jesu",
});


export const changeData = selector({
	key : ""
})