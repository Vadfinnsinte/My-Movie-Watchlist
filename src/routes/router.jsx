import { createHashRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Components/HomePage";
import MyMovies from "../Components/MyMovies";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/my-movies",
        element: <MyMovies />,
      },
    ],
  },
]);

export { router };
