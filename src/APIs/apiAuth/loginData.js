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

  if (!response.ok) {
    throw new Error("wrong email or password");
  }
  saveToken(data.token, data.expiration);

  return response.json();
};
