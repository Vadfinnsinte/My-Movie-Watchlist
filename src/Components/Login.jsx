import { useState } from "react";
import "../style/loginRegister.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../APIs/apiAuth/loginData";
import { validateEmail } from "../functions/validation/email";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("e");
  const [emailError, setEmailError] = useState({
    error: false,
    message: "Invalid email",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    let valid = validateEmail(email, emailError, setEmailError);
    if (valid) {
      try {
        await loginUser(email, password);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="login-layout">
      <form className="login-container">
        <h1>Sign in</h1>
        <div>
          <label htmlFor="email">
            Email{" "}
            <span className={emailError.error ? "visible" : "none"}>
              {emailError.message}
            </span>
          </label>
          <input
            id="email"
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("e");
              setEmailError({ ...emailError, error: false });
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("e");
            }}
          />
          <p className={error === "e" ? "none" : "visible"}>{error}</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
      <div className="register-link">
        <p>
          Not a user?
          <span onClick={() => navigate("/register")}>click here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
