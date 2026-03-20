const ConnectionString = import.meta.env.VITE_BACKEND_CONNECTION;
export const registerUser = async (name, userName, email, password) => {
  const response = await fetch(`${ConnectionString}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: name,
      userName: userName,
      email: email,
      password: password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Registration failed");
  }

  return data;
};
