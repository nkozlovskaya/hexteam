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
        dispatch(
          setUser({
            token: access_token,
          })
        );
      })
      .catch(() => alert("Invalid user!"));
    localStorage.setItem("token", access_token);
    nav("/main");
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
};

export { Login };
