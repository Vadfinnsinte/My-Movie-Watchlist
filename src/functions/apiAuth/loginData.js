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
  localStorage.setItem("token", data.token);
  localStorage.setItem("tokenExpiration", data.expiration);

  return response.json();
};
export const getToken = () => {
  return localStorage.getItem("token");
};
