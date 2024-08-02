import { loginUser, logout, registerUser, loginWithGoogle } from "./auth";

export const server = {
  //actions

  //Auth
  registerUser,
  logout,
  loginUser,
  loginWithGoogle,
};
