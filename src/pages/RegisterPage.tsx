import { SignUp } from "../components/SignUp";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const RegisterPage = () => {
  return (
    <div>
      <Navbar title="Registration" />
      <SignUp />
      <p className='p_signup'>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
