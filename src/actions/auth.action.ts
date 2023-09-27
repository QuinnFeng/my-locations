import qs from "qs";
import axios from "axios";
import { UserModel } from "../models/user.model";
import { appConstants, baseUrl } from "../util/Constant";

export const login = (
  user: UserModel,
  succeed: () => void,
  failed: (msg: string) => void
) => {
  const loginPromise = axios.post(
    `${baseUrl}/login`,
    qs.stringify(user), // convert user: json into form data
    {
      withCredentials: true, // carry or set cookie
    }
  );
  loginPromise
    .then((res) => {
      console.log(res);
      res.data.success ? succeed() : failed(res.data.message);
    })
    .catch((err) => failed(err.message));

  return {
    type: appConstants.LOGIN,
    payload: loginPromise,
  };
};

export const signUp = (user: UserModel, failed: (msg: string) => void) => {
  console.log(qs.stringify(user));
  const SignUpPromise = axios.post(`${baseUrl}/users`, user);

  SignUpPromise.then((res) => res.data).catch((err) => failed(err.message));

  return {
    type: appConstants.SIGN_UP,
    payload: SignUpPromise,
  };
};

export const checkLogin = () => {
  const checkLoginPromise = axios.get(
    `${baseUrl}/login`, // this also work
    { withCredentials: true } // we carry cookies, as an object
  );
  return {
    type: appConstants.CHECK_LOGIN,
    payload: checkLoginPromise,
  };
};
