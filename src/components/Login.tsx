import { FC } from "react";
import { Form } from "./Form";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { loginUser } from "../api/apiService";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { access_token } = useAppSelector((state) => state.user);
  const handleLogin = (name: string, password: string) => {
    loginUser(name, password)
      .then(() => {
        localStorage.setItem("jwt", access_token);
        dispatch(
          setUser({
            token: access_token,
            loggedIn: true,
          })
        );
      })
      .catch(() => alert("Invalid user!"));
    nav("/main");
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
};

export { Login };
