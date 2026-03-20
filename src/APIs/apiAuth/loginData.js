import { saveToken } from "../../functions/helpers/tokens";

const ConnectionString = import.meta.env.VITE_BACKEND_CONNECTION;

export const loginUser = async (email, password) => {
  const response = await fetch(`${ConnectionString}/login/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    if (response.status === 500) {
      throw new Error("Server error, try again later");
    } else {
      throw new Error("Incorrect email or password");
    }
  }
  saveToken(data.token, data.expiration);

  return data;
};
