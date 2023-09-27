import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { UserModel } from "../models/user.model";
import { login } from "../actions/auth.action";
// a functional component, just return....
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      login(
        { username, password } as UserModel,
        () => null /*props.history.push(appConstants.restaurantsRoute)*/,
        (msg: string) => console.log(msg)
      )
    );
  };

  return (
    <>
      <form
        onSubmit={submitHandler} // same as use button to submit( onClick on button )
      >
        <h2>Login in</h2>
        <label htmlFor="username">Username:</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="form-control"
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control"
          type="text"
          name="password"
          id="password"
        />
        <br />
        <button className="btn btn-success">Login</button>
      </form>
    </>
  );
};
