export function validateUserInfo(
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
) {
  let valid = true;
  if (!name || name.length < 3 || name.length > 100) {
    valid = false;
    setNameError({ ...nameError, error: true });
  }

  if (!userName || userName.length < 3 || userName.length > 50) {
    valid = false;
    setUserNError({ ...userNError, error: true });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    valid = false;
    setEmailError({ ...emailError, error: true });
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password || !passwordRegex.test(password)) {
    valid = false;
    setPasswordError({ ...passwordError, error: true });
  }
  return valid;
}
