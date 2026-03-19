export const saveToken = (token, expire) => {
  localStorage.setItem("token", token);
  localStorage.setItem("tokenExpiration", expire);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiration");
};
