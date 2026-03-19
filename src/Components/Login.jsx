import { useState } from "react";
import "../style/loginRegister.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../functions/apiAuth/loginData";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("e");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login-layout">
      <div className="login-container">
        <h1>Login</h1>
        <div>
          <label>Email</label>
          <input
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("e");
            }}
          />
          <label>Password</label>
          <input
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
      </div>
      <div className="register-link">
        <p>
          Not a user? <span>click here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
