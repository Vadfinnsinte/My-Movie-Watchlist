import { useState } from "react";
import { validateUserInfo } from "../functions/validation/registration";
import { registerUser } from "../APIs/apiAuth/registerUserData";
import { loginUser } from "../APIs/apiAuth/loginData";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState({
    error: false,
    message: "Name must be 3–100 chars",
  });
  const [userNError, setUserNError] = useState({
    error: false,
    message: "Must be 3–50 chars",
  });
  const [emailError, setEmailError] = useState({
    error: false,
    message: "Invalid email",
  });
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "Min 8 chars, 1 upper, 1 lower, 1 number, 1 special",
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    let valid = validateUserInfo(
      name,
      userName,
      email,
      password,
      nameError,
      setNameError,
      userNError,
      setUserNError,
      emailError,
      setEmailError,
      passwordError,
      setPasswordError,
    );
    if (!valid) return;

    try {
      await registerUser(name, userName, email, password);

      await loginUser(email, password);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const resetErrors = () => {
    setEmailError({ ...emailError, error: false });
    setNameError({ ...nameError, error: false });
    setPasswordError({ ...passwordError, error: false });
    setUserNError({ ...userNError, error: false });
  };
  return (
    <>
      <div className="login-layout">
        <div className="login-container">
          <h1>Register</h1>
          <div>
            <div>
              <label>
                Name*{" "}
                <span className={nameError.error ? "visible" : "none"}>
                  {nameError.message}
                </span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  resetErrors();
                }}
              />

              <label>
                UserName*
                <span className={userNError.error ? "visible" : "none"}>
                  {userNError.message}
                </span>
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  resetErrors();
                }}
              />
              <label>
                Email*{" "}
                <span className={emailError.error ? "visible" : "none"}>
                  {emailError.message}
                </span>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  resetErrors();
                }}
              />
              <label>
                Password*{" "}
                <span className={passwordError.error ? "visible" : "none"}>
                  {passwordError.message}
                </span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  resetErrors();
                }}
              />
            </div>

            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
