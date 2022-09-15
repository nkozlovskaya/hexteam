
import { Login } from "../components/Login";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar title="Login" />
      <Login />
      <p className="p_signup">
        Or <Link to="/">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
