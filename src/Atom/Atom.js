import { atom } from "recoil";

export const Auth = atom({
  key: "Auth",
  default: {
    name: null,
    status: false,
  },
});

export const Load = atom({
  key: "Load",
  default: false,
});

export const jsonwebtoken = atom({
  key: "jsonwebtoken",
  default: localStorage.getItem("jwt"),
});

export const Portfolio=atom({
  key:"Portfolio",
  default:1
})

export const Plant=atom({
  key:"Plant",
  default:1
})
