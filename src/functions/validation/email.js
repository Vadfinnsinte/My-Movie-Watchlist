export const validateEmail = (email, emailError, setEmailError) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    setEmailError({ ...emailError, error: true });
    return false;
  }
  return true;
};
