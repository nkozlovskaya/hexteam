import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { registerUser } from "../api/apiService";

const SignUp: FC = () => {
  const nav = useNavigate();
  const handleUser = (name: string, password: string) => {
    if (name.length && password.length) {
      registerUser(name, password);
    } else {
      alert("Please enter name and password!");
    }
    nav("/login");
  };
  return <Form title="Register" handleClick={handleUser} />;
};

export { SignUp };
