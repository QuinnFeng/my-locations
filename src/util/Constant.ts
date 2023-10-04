const gmKey = import.meta.env.VITE_GOOGLE_MAP;
const baseUrl = "http://localhost:5173";
import landingImage from "../assets/landingpage.jpg";
import logo from "../assets/logo.png";
// import

//env variable
export { gmKey, baseUrl };

//images
export const images = { landingImage, logo };

export const appConstants = {
  // routes
  loginRoute: "/login",
  signUpRoute: "/sign_up",
  main: "/main",

  // actions
  LOGIN: "LOGIN",
  CHECK_LOGIN: "CHECK_LOGIN",
  SIGN_UP: "SIGN_UP",
  ADD_USER_DETAIL: "ADD_USER_DETAIL",
};

export interface ReduxState {
  names: string[];
  user: { username: string };
}
