import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoginBox from "../components/LoginBox";
import LoginLogo from "../components/LoginLogo";
import "../css/Init.css";
import "../css/Login.css";

const Login = () => {
    return (
      <div className="login-wrapper">
        <LoginLogo/>
        <LoginBox/>
        <Footer/>
      </div>
    );
  };
  export default Login;